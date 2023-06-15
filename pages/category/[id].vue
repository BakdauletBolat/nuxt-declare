<template>
  <SafeArea>
    <img alt="banner" class="h-[180px] w-full object-cover" :src="headerStore.activeCategory?.picture?.data?.attributes.url"/>
    <Breadcrumb :centered="true" :options="options"></Breadcrumb>
    <ProductFilterHeader></ProductFilterHeader>
    <ProductList :is-loading="productStore.isLoadingProducts"
                 :products="productStore.productsData.data as IProduct[] | ICollection[]"></ProductList>
  </SafeArea>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import Breadcrumb from '~~/components/ui/Breadcrumb.vue';
import {useProductStore} from '~~/stores/productStore';
import {useHeaderStore} from '~~/stores/headerStore';
import {ICategory} from '~~/models/category';
import categoryService from '~~/services/category-service';
import {useRoute, useRouter} from 'vue-router';
import ProductList from "~/entities/product/ui/product-list.vue";
import { IProduct } from '~~/models/product';
import { ICollection } from '~~/models/collection';


const productStore = useProductStore();
const headerStore = useHeaderStore();
const options = ref<any>([{
  title: 'Главная',
  to: '/'
}]);


const route = useRoute();
const router = useRouter();


const loadActiveCategory = async () => {
  const category: ICategory = (await categoryService.getCategory(route.params.id)).data;
  console.log(category);
  headerStore.activeCategory = category;
}

const loadProducts = async () => {
  const filtersData = productStore.submitFilters();
  await router.replace(
      {
        query: Object.assign(route.query, filtersData)
      }
  )
  await loadActiveCategory();
  await productStore.loadProducts(1,
      Object.assign({
        category: parseInt(route.params.id.toString()),
      })
  );
  options.value.push({
    title: headerStore.activeCategory?.attributes.name
  });
}
onMounted(async () => {
  await loadProducts();
  productStore.loadFilters(headerStore.activeCategory!);
});

</script>
<style>
.two-column {
  grid-column: span 2;
}
</style>