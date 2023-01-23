<script setup lang="ts">
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import HomeMainSliderItemVue from './HomeMainSliderItem.vue';
import HomeMainSliderSkeleton from './HomeMainSliderSkeleton.vue';
import { Pagination } from 'swiper';
import bannerService from '~~/services/banner-service';
import { IBannerData } from '../model/interface';
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading,status, isFetched } = useQuery<IBannerData, Error>({
    queryKey: ['banners'],
    queryFn: () => bannerService.getBanners({ include: ['picture'] }),
});

const modules = [Pagination];

const pagination = {
    el: '.swiper-pagination',
    bulletActiveClass: 'product-slider-pagination-active',
    bulletClass: 'product-slider-pagination bg-white',
    clickable: true
}
</script>
<template>
    <SafeArea class="relative">
    <HomeMainSliderSkeleton v-if="isLoading"></HomeMainSliderSkeleton>
    <swiper v-else class="h-[588px]" :modules="modules" :pagination="pagination" :slides-per-view="1">
        
        <swiper-slide v-for="item in data?.data">
            <HomeMainSliderItemVue :item="item"></HomeMainSliderItemVue>
        </swiper-slide>
        <!-- If we need pagination -->
        <div class="swiper-pagination flex pb-7 justify-center"></div>
    </swiper>
    </SafeArea>
</template>