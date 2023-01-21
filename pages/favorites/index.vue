<template>
    <SafeArea>
        <div v-if="products" class="grid grid-cols-2 lg:grid-cols-3">
            <div :key="`${product.id}${index}`" v-for="product, index in products">
                <ProductCard v-if="product.object == 'Product'" :product="(product as IProduct)">
                </ProductCard>
            </div>
        </div>
    </SafeArea>

</template>
<script lang="ts" setup>import { onMounted, ref } from 'vue';
import { IProduct } from '~~/models/product';
import FavoriteService from '@/services/favorites-service';

const products = ref<IProduct[]>([]);

onMounted(() => {
    products.value = FavoriteService.getAllFavorites();
});

</script>