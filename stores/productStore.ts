import { defineStore } from "pinia";
import productService from "~/services/product-service";
import { IProduct } from "~~/models/product";
import { ref } from 'vue';


export const useProductStore = defineStore('product-store', () => {

    const products = ref<IProduct[]>([]);

    const loadProducts = async () => {
        products.value = (await productService.getProducts({
            collection_id: 3
        })).data;
    }

    return {
        products,
        loadProducts
    }

});