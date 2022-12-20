import {defineStore} from "pinia";
import {IBanner, IBannerData} from "~/models/banner";
import {ref} from 'vue';
import BannerService from "~/services/banner-service";


export const useHomeStore = defineStore('home-store', () => {

    const banners = ref<IBanner[]>([]);


    const loadBanners = async () => {
        const bannerData: IBannerData = await BannerService.getBanners();
        banners.value = bannerData.data;
    }

    return {
        banners,
        loadBanners
    }

});