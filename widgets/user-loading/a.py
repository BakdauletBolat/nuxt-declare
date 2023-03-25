import csv
import json
from typing import List

import xlsxwriter
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from xlsxwriter.worksheet import Worksheet

from handbook.city.models import City
from handbook.shop.models import Shop
from history.models import history
from product.models import Product
from product.serializers import ProductSerializer
from sale.actions.find_sale_actions.cascade_actions import generate_cascade_position
from sale.actions.find_sale_actions.find_sale_actions import calculate_total_sum, calculate_option_sales, \
    generate_options, find_apply_sales, get_products
from sale.exceptions import IntegrityException
from sale.models.Sale import Sale
from sale.querybuilder.GetFilteredProductsByIDs import GetFilteredProductsByIDs
from sale.serializers import OptionSerializer, ProductItem, FindSaleSerializer, Option
from sale.tasks.GetUniqueFilteredProducts import GetUniqueFilteredProducts
from sale.ui.API.Transformers.BaseSaleCreateTransforemer import BaseSaleCreateTransformer
from sale.tasks.CreateSale import CreateSale as TaskCreateSale
from django.db import transaction, IntegrityError
from rest_framework.exceptions import ValidationError
import os
from datetime import datetime


class CreateXlsxFileAction:

    def __init__(self, sale, products):
        self.sale = sale
        self.products = products

    def get_file_path(self, name):
        folder_path = settings.BASE_DIR / 'exsel-o'
        try:
            os.mkdir(folder_path)
        except Exception as error:
            print(error)

        return folder_path / name

    def write_header(self, worksheet: Worksheet):
        worksheet.write(0, 0, 'Product Id')
        worksheet.write(0, 1, 'Product Name')
        worksheet.write(0, 2, 'Product Category')

    def run(self):

        name = f"Отчет:Акция:{self.sale.sale_type}:ID-{self.sale.id}:{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}.xlsx"  # type: ignore
        file_path = self.get_file_path(name)

        workbook = xlsxwriter.Workbook(file_path)
        worksheet = workbook.add_worksheet()
        self.write_header(worksheet)
        for (index, product) in enumerate(self.products):
            worksheet.write(index + 1, 0, product['id'])  # type: ignore
            worksheet.write(index + 1, 1, product['full_name'])  # type: ignore
            worksheet.write(index + 1, 2, product['category_id'])  # type: ignore

        workbook.close()
        return file_path


class CreateManyToManyRelatedObjects:

    def __init__(self, products_data, payment_method_data, shops_data: List[str],
                 is_intersects_sales, sale,
                 is_reverse: bool) -> None:
        self.products_data = products_data
        self.is_intersects_sales = is_intersects_sales
        self.shops_data = shops_data
        self.sale = sale
        self.is_reverse = is_reverse
        self.payment_method_data = payment_method_data

    def run(self):

        try:
            if self.is_reverse:
                products = Product.objects.exclude(id__in=self.products_data).all()
                self.sale.products.set(products)
            else:
                self.sale.products.set(self.products_data)
        except Exception as e:
            print(e, 'as')

        if self.is_intersects_sales != None:
            self.sale.is_intersects_sales.set(self.is_intersects_sales)
            for intersects_sale in self.is_intersects_sales:
                try:
                    obj = Sale.objects.get(id=intersects_sale)
                    obj.is_intersects_sales.add(self.sale.id)
                except ObjectDoesNotExist as e:
                    raise IntegrityException(e.args)
                except IntegrityError as e:
                    raise IntegrityException(e.args)

        shops_ids: List[int] = []
        for sc_id in self.shops_data:
            if sc_id == "__all__":
                cities = City.objects.all()
                for city in cities:
                    for shop in city.shops.all():
                        shops_ids.append(shop.id)
            elif type(sc_id) == str and sc_id.startswith('c'):
                city_id = int(sc_id.replace('c', ''))
                shops_list_ids = Shop.objects.filter(city_id=city_id).values_list('id', flat=True)
                shops_ids.extend(shops_list_ids)
            elif type(sc_id) == str and sc_id.startswith('s'):
                shop_id = int(sc_id.replace('s', ''))
                shops_ids.append(shop_id)
            else:
                shops_ids.append(sc_id)

        self.sale.shops.set(shops_ids)
        self.sale.payment_method.set(self.payment_method_data)

        return self.sale


class BaseCreateSaleAction:

    def __init__(self, request) -> None:
        self.request = request
        self.sale = None
        self.author_id = request.META['retail_user']['id']
        self.content_type_id = None
        self.object_id = None
        self.transformer = BaseSaleCreateTransformer(data=self.request.data)

    def create_type_action(self):
        pass

    def validate(self, request_data):
        pass

    def run(self):
        with transaction.atomic():
            self.validate(self.request.data)
            self.create_type_action()
            shops_data = self.transformer.validated_data.pop('shops_ids', None)
            products_data = self.transformer.validated_data.pop('products_ids', None)
            is_reverse = self.transformer.validated_data.pop('is_reverse', False)
            is_intersects_sales_data = self.transformer.validated_data.pop('is_intersects_sales_ids', None)
            self.transformer.validated_data.update(author_id=self.author_id, content_type_id=self.content_type_id,
                                                   object_id=self.object_id)

            payment_method_data = self.transformer.validated_data.pop('payment_method_ids', None)

            self.sale = TaskCreateSale(data=self.transformer.validated_data).run()

            CreateManyToManyRelatedObjects(products_data, payment_method_data,
                                           shops_data, is_intersects_sales_data,
                                           self.sale, is_reverse).run()

            try:
                history.send(sender=Sale, instance=self.sale,
                             action='Cоздание',
                             message='Создание акций',
                             author_id=self.request.META.get('retail_user')['id'],
                             data=self.request.data)
            except:
                pass

            return self.sale


class ConvertExcelToJson:
    exclude_types = ['percenttype']

    def __init__(self, data) -> None:
        self.data = data
        self.products_request = []
        self.products_data = []

    @staticmethod
    def validate(products):
        products_length = len(products)
        for i in range(products_length - 1):
            for j in range(i + 1, products_length):
                if products[i]['product_id'] == products[j]['product_id'] and products[i]['quality_id'] == \
                        products[j]['quality_id']:
                    raise ValidationError('Не уникальные данные')

    def run(self):
        file = self.data['file']
        sale_type = self.data.get('sale_type', None)
        decoded_file = file.read().decode('utf-8').splitlines()
        reader = csv.DictReader(decoded_file)
        products = set()

        for data in reader:
            products.add(data['product_id'])

        filtered = GetUniqueFilteredProducts(products).run()

        for product_item in filtered:
            self.products_data.append({
                "product_id": product_item.id,
                "product": ProductSerializer(product_item).data,
                "cost": product_item.prices.first().cost if product_item.prices.first() is not None else 'not_price'
            })

        if sale_type in self.exclude_types:
            self.products_data = []
            reader = csv.DictReader(decoded_file)
            products = []
            for data in reader:
                products.append({
                    'product_id': data.get('product_id'),
                    'quality_id': data.get('quality_id'),
                    'quantity': 1
                })

            self.validate(products)

            filtered, not_exist_products = GetFilteredProductsByIDs(products).run()

            for sale_item in filtered:
                self.products_data.append({
                    "product_id": sale_item.product.id,
                    "product": ProductSerializer(sale_item.product).data,
                    "cost": sale_item.product.prices.first().cost,
                    "quality": sale_item.quality_id
                })

        return self.products_data


class FindSale:

    def __init__(self, data, type='self') -> None:
        self.products: List[ProductItem] = []
        self.data = data
        self.type = type
        self.options: List[Option] = []

    def run(self):
        find_sale_data = FindSaleSerializer.parse_obj(self.data)
        products_data = find_sale_data.products
        shop_id = find_sale_data.shop_id
        payment_method_id = find_sale_data.payment_method_id

        """Получение продуктов"""
        self.products: List[ProductItem] = get_products(products_data)

        """Найти все акций и пересечение"""
        find_apply_sales(self.products, shop_id, payment_method_id)

        """Генерация вариантов"""
        generate_options(self.products, [], list(filter(lambda x: len(x.sales) > 0, self.products)), self.options)

        """Генерация позиций каскада"""
        generate_cascade_position(self.options)

        """Расчет все акций в каждом варианте"""
        calculate_option_sales(
            options=self.options,
            payment_method_id=payment_method_id
        )

        """Суммировать сумму всех скидок"""
        calculate_total_sum(self.options)

        self.options.sort(key=lambda x: x.total_discount, reverse=True)

        cascade_without_bonus = list(
            filter(lambda option_c: 'salecascade' in option_c.sales and 'salestandart' not in option_c.sales,
                   self.options))

        bonus_without_cascade = list(
            filter(lambda option_b: 'salecascade' not in option_b.sales and 'salestandart' in option_b.sales,
                   self.options))

        return {
            'default': OptionSerializer(self.options[:5]).serialize(),
            'cascade_without_bonus': OptionSerializer(cascade_without_bonus[:5]).serialize(),
            'bonus_without_cascade': OptionSerializer(bonus_without_cascade[:5]).serialize(),
        }
