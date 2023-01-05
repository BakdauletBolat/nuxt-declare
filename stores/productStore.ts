import { defineStore } from "pinia";
import productService from "~/services/product-service";
import { IProduct } from "~~/models/product";
import { ref } from 'vue';
import { ICollection } from "~~/models/collection";
import collectionService from "~~/services/collection-service";


export const useProductStore = defineStore('product-store', () => {

    const products = ref<(ICollection | IProduct)[]>([]);
    const page = ref<number>(1);
    const isLoadingProducts = ref<boolean>(true);
    const isLoadingMore = ref<boolean>(false);
    const isLastPage = ref<boolean>(false);

    const getRandomPlace = () => {
        for (let index = 4; index < products.value.length; index += 5) {
            if (products.value[index].object === 'Product') {
                return index;
            }
        }

        return -1;
    }

    const incrementPage = () => {
        page.value += 1;
    }


    const insertCollections = async () => {
        const collections: ICollection[] = (await collectionService.getRandomCollections({})).data;
        collections.map(collection => {
            const index: number = getRandomPlace();

            console.log(index, products.value);
            if (index != -1) {
                products.value.splice(index, 0, collection);
            }
        });

    }



    


    const loadProducts = async (page: number = 1) => {
        isLoadingProducts.value = true;
        products.value = (await productService.getProducts({
            page: page
        })).data;
        insertCollections();
        isLastPage.value = false;
        isLoadingProducts.value = false;
    }

    const loadMoreProducts = async (page:number = 1) => {
        isLoadingMore.value = true;
        const productsNew: IProduct[] = (await productService.getProducts({
            page: page
        })).data;

        if (productsNew.length <= 0) {
            isLastPage.value = true;
            isLoadingMore.value = false;
            return;
        }
        products.value.push(...productsNew);
        insertCollections();
        isLoadingMore.value = false;
    }


    return {
        isLoadingMore,
        isLoadingProducts,
        isLastPage,
        products,
        page,
        incrementPage,
        loadProducts,
        loadMoreProducts,
    }

});