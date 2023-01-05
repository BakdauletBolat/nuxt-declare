<template>
    <SafeArea>
        <img class="h-[180px] w-full" src="@/assets/images/Banner.png" />
        <Breadcrumb :centered="true" :options="[
    {
        title: 'Главная',
        to: '/'
    },
    {
        title: 'Кольцо',
        to: '/'
    }
]"></Breadcrumb>
        <ProductFilterHeader></ProductFilterHeader>
        <div v-if="productStore.isLoadingProducts">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-[20px] px-[20px]">
                <ProductSkeleton v-for="index in Array.from(Array(10).keys())"></ProductSkeleton>
            </div>
        </div>
        <div v-if="productStore.products" class="grid grid-cols-2 lg:grid-cols-3">
            <div :key="`${product.id}${index}`" v-for="product, index in productStore.products" :class="{
    'two-column': product.object === 'Collection'
}">
                <ProductCard v-if="product.object == 'Product'" :product="(product as IProduct)">
                </ProductCard>
                <div v-else>
                    {{ product.object }}
                </div>
            </div>
            <div v-if="productStore.isLoadingMore">Загрузка данных</div>
            <div ref="el"></div>
        </div>

    </SafeArea>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Breadcrumb from '~~/components/UI/Breadcrumb.vue';
import { IProduct } from '~~/models/product';
import { useProductStore } from '~~/stores/productStore';

import { useIntersectionObserver } from '@vueuse/core'

const el = ref<HTMLElement | undefined>(undefined)

const productStore = useProductStore();



useIntersectionObserver(
    el,
    async () => {
        if (!productStore.isLastPage) {
            productStore.incrementPage();
            console.log('more');
            await productStore.loadMoreProducts(productStore.page);
        }

    },
    { threshold: 0.9 }
)


onMounted(() => {
    productStore.loadProducts();
});


</script>
<style>
.two-column {
    grid-column: span 2;
}
</style>