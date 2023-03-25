from django.http import FileResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView

from apps.salecoupon.models.CouponType import CouponType
from sale.actions.actions import CreateXlsxFileAction
from sale.models.Sale import Sale
from sale.permissions import IsAuthUser
from rest_framework import status


class CouponWhenSaleProductToExselView(APIView):
    permission_classes = [IsAuthUser]

    resource_name = 'WhenSaleProducts'

    @swagger_auto_schema(
        operation_id='Продукты купона exsel',
        tags=['Купон']
    )
    def get(self, request, pk):
        sale = get_object_or_404(Sale, id=pk)
        coupon: CouponType = sale.content_object
        products = coupon.when_sale_products.values('id', 'full_name', 'category_id')
        file_name = CreateXlsxFileAction(sale=sale, products=products).run()
        return FileResponse(open(file_name, 'rb'), status=status.HTTP_200_OK)
