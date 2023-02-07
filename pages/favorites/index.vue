<template>
  <SafeArea>
    <PageTitleUi title="Список желаний"></PageTitleUi>
    <ProductList v-if="products" :is-loading="isLoading" :products="products"></ProductList>
  </SafeArea>

</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {IProduct} from '~~/models/product';
import FavoriteService from '@/services/favorites-service';
import ProductList from "~/entities/product/ui/product-list.vue";
import {ICollection} from "~/models/collection";

const products = ref<IProduct[] | ICollection[]>([]);
const isLoading = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;
  try {
    products.value = FavoriteService.getAllFavorites();
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }

});

</script>