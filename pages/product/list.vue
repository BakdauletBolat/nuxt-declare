<template>
    <SafeArea>
        <div class="grid grid-cols-2">
            <ProductCard :class="{
                'two-column': index % 5 === 0 
            }" v-for="product, index in productStore.products" :product="product"></ProductCard>
        </div>
    </SafeArea>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useProductStore } from '~~/stores/productStore';

const productStore = useProductStore();

onMounted(()=>{
    productStore.loadProducts();
});

</script>
<style>
.two-column {
    grid-column: span 2;
}
</style>