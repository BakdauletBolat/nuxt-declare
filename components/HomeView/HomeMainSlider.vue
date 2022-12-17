<script setup lang="ts">
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import HomeMainSliderItemVue from './HomeMainSliderItem.vue';
import { Pagination } from 'swiper';

const modules = [Pagination];

const pagination = {
    el: '.swiper-pagination',
    bulletActiveClass: 'product-slider-pagination-active',
    bulletClass: 'product-slider-pagination-white',
    clickable: true,
    // dynamicBullets: true
}

const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

</script>
<template>
    <swiper class="h-[588px]" :modules="modules"
            :pagination="pagination" :slides-per-view="1" 
            :space-between="50" @swiper="onSwiper" 
           
            @slideChange="onSlideChange">
        <swiper-slide>
            <HomeMainSliderItemVue></HomeMainSliderItemVue>
        </swiper-slide>
        <swiper-slide>
            <HomeMainSliderItemVue></HomeMainSliderItemVue>
        </swiper-slide>
        <swiper-slide>
            <HomeMainSliderItemVue></HomeMainSliderItemVue>
        </swiper-slide>
        <!-- If we need pagination -->
        <div class="swiper-pagination flex pb-7 justify-center"></div>
    </swiper>
</template>
<style>
    .product-slider-pagination-white {
        @apply bg-white w-2.5 h-0.5 mx-1;
        transition: .2s ease;
    }
    </style>