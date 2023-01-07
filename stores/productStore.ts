import { defineStore } from "pinia";
import productService from "~/services/product-service";
import { IMeta, IProduct } from "~~/models/product";
import { ref } from 'vue';
import { ICollection } from "~~/models/collection";
import collectionService from "~~/services/collection-service";


export const useProductStore = defineStore('product-store', () => {

    const productsData = ref<{
        data: (ICollection | IProduct)[],
        meta?:IMeta
    }>({
        data: []
    });
    const page = ref<number>(1);
    const isLoadingProducts = ref<boolean>(true);
    const isLoadingMore = ref<boolean>(false);
    const isLastPage = ref<boolean>(false);

    const getRandomPlace = () => {
        for (let index = 4; index < productsData.value.data.length; index += 5) {
            if (productsData.value.data[index].object === 'Product') {
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
            if (index != -1) {
                productsData.value.data.splice(index, 0, collection);
            }
        });

    }

    const loadProducts = async (page: number = 1) => {
        isLoadingProducts.value = true;
        productsData.value = (await productService.getProducts({
            page: page
        }));
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
        productsData.value.data.push(...productsNew);
        insertCollections();
        isLoadingMore.value = false;
    }


    return {
        isLoadingMore,
        isLoadingProducts,
        isLastPage,
        productsData,
        page,
        incrementPage,
        loadProducts,
        loadMoreProducts,
    }

});