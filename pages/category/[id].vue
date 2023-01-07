<template>
    <SafeArea>
        <img class="h-[180px] w-full" src="@/assets/images/Banner.png" />
        <Breadcrumb :centered="true" :options="options"></Breadcrumb>
        <ProductFilterHeader></ProductFilterHeader>
        <div v-if="productStore.isLoadingProducts">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-[20px] px-[20px]">
                <ProductSkeleton v-for="index in Array.from(Array(10).keys())"></ProductSkeleton>
            </div>
        </div>
        <div v-if="productStore.productsData.data" class="grid grid-cols-2 lg:grid-cols-3">
            <div :key="`${product.id}${index}`" v-for="product, index in productStore.productsData.data" :class="{
    'two-column': product.object === 'Collection'
}">
                <ProductCard v-if="product.object == 'Product'" :product="(product as IProduct)">
                </ProductCard>
                <CollectionCard v-else :collection="(product as ICollection)"></CollectionCard>
            </div>
            <div v-if="productStore.isLoadingMore">Загрузка данных</div>
        </div>

    </SafeArea>
</template>
<script lang="ts" setup>
import { onMounted, ref,watch } from 'vue';
import Breadcrumb from '~~/components/UI/Breadcrumb.vue';
import { IProduct } from '~~/models/product';
import { useProductStore } from '~~/stores/productStore';

import { useIntersectionObserver } from '@vueuse/core'
import CollectionCard from '~~/components/Product/CollectionCard.vue';
import { ICollection } from '~~/models/collection';
import { useHeaderStore } from '~~/stores/headerStore';
import { ICategory } from '~~/models/category';
import categoryService from '~~/services/category-service';
import { useRoute } from 'vue-router';



const productStore = useProductStore();
const headerStore = useHeaderStore();
const options = ref<any>([{
    title: 'Главная',
    to: '/'
},
{
    title: headerStore.activeCategory?.attributes.name
}]);


watch(()=>headerStore.activeCategory, (category)=>{
     console.log('activeCategoryEdited',category);
     console.log(options.value);
     options.value = [{
        title: 'Hello',
        world: 'a'
     }]
     console.log(options.value, 'options value');
})

const route = useRoute();


const loadActiveCategory = async () => {
    const category: ICategory = (await categoryService.getCategory(route.params.id)).data;
    if (headerStore.activeCategory == undefined) {
        headerStore.activeCategory = category;
    }
}

const loadProducts = async () => {
    // await loadActiveCategory();
    productStore.loadProducts();
}
onMounted(()=>{
    loadProducts();
});

</script>
<style>
.two-column {
    grid-column: span 2;
}
</style>