<template>
  <SafeArea>
    <img alt="banner" class="h-[180px] w-full" src="@/assets/images/Banner.png"/>
    <Breadcrumb :centered="true" :options="options"></Breadcrumb>
    <ProductFilterHeader></ProductFilterHeader>
    <ProductList :is-loading="productStore.isLoadingProducts"
                 :products="productStore.productsData.data"></ProductList>
  </SafeArea>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import Breadcrumb from '~~/components/UI/Breadcrumb.vue';
import {useProductStore} from '~~/stores/productStore';
import {useHeaderStore} from '~~/stores/headerStore';
import {ICategory} from '~~/models/category';
import categoryService from '~~/services/category-service';
import {useRoute} from 'vue-router';
import ProductList from "~/entities/product/ui/product-list.vue";


const productStore = useProductStore();
const headerStore = useHeaderStore();
const options = ref<any>([{
  title: 'Главная',
  to: '/'
}]);


const route = useRoute();


const loadActiveCategory = async () => {
  const category: ICategory = (await categoryService.getCategory(route.params.id)).data;
  headerStore.activeCategory = category;
}

const loadProducts = async () => {
  productStore.submitFilters();
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
onMounted(() => {
  loadProducts();
  productStore.loadFilters(parseInt(route.params!.id!.toString()));
});

</script>
<style>
.two-column {
  grid-column: span 2;
}
</style>