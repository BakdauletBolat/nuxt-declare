import {defineStore} from "pinia";
import {IBanner, IBannerData} from "~/models/banner";
import {IProduct, IProductData} from "~/models/product";
import {ref} from 'vue';
import BannerService from "~/services/banner-service";
import ProductService from "~/services/product-service";


export const useHomeStore = defineStore('home-store', () => {

    const banners = ref<IBanner[]>([]);
    const specialPriceProducts = ref<IProduct[]>([]);

    const loadBanners = async () => {
        const bannerData: IBannerData = await BannerService.getBanners({ include: ['picture']});
        banners.value = bannerData.data;
    }

    const loadSpecialPriceProducts = async () => {
        const productsData: IProductData = await  ProductService.getProducts({});
        specialPriceProducts.value = productsData.data;
    }



    return {
        banners,
        specialPriceProducts,
        loadBanners,
        loadSpecialPriceProducts,
    }

});