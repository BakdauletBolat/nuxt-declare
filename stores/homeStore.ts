import {defineStore} from "pinia";
import {IBanner, IBannerData} from "~/models/banner";
import {IProduct, IProductData} from "~/models/product";
import {ref} from 'vue';
import BannerService from "~/services/banner-service";
import ProductService from "~/services/product-service";
import { ICollection } from "~~/models/collection";
import collectionService from "~~/services/collection-service";


export const useHomeStore = defineStore('home-store', () => {

    const banners = ref<IBanner[]>([]);
    const specialPriceProducts = ref<IProduct[]>([]);
    const lastCollection = ref<ICollection>();
    const loadingSpecialPriceProducts = ref<boolean>(false);

    const loadBanners = async () => {
        const bannerData: IBannerData = await BannerService.getBanners({ include: ['picture']});
        banners.value = bannerData.data;
    }

    const loadSpecialPriceProducts = async () => {
        loadingSpecialPriceProducts.value = true;
        const productsData: IProductData = await  ProductService.getProducts({});
        specialPriceProducts.value = productsData.data;
        loadingSpecialPriceProducts.value = false;
    }

    const loadLastCollection = async () => {
        const lastCollectionData: ICollection = (await collectionService.getLastCollection({include: ['picture']})).data;
        lastCollection.value = lastCollectionData;
    }



    return {
        banners,
        specialPriceProducts,
        lastCollection,
        loadBanners,
        loadLastCollection,
        loadingSpecialPriceProducts,
        loadSpecialPriceProducts,
    }

});