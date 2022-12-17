<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from './ProductCard.vue';
import { Pagination } from 'swiper';

const modules = [Pagination];

const pagination = {
    el: '.swiper-pagination',
    bulletActiveClass: 'product-slider-pagination-active',
    bulletClass: 'product-slider-pagination',
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
    <swiper :modules="modules" 
            :pagination="pagination" :slides-per-view="2" 
            :breakpoints="{
                768: {
                    slidesPerView: 3
                }  
            }"
            @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <ProductCard></ProductCard>
        </swiper-slide>
        <swiper-slide>
            <ProductCard></ProductCard>
        </swiper-slide>
        <swiper-slide>
            <ProductCard></ProductCard>
        </swiper-slide>
        <swiper-slide>
            <ProductCard></ProductCard>
        </swiper-slide>
        <swiper-slide>
            <ProductCard></ProductCard>
        </swiper-slide>

        <!-- If we need pagination -->
        <div class="swiper-pagination flex pt-7 justify-center"></div>
        <div class="h-[50px]"></div>
    </swiper>
</template>
<style>
.product-slider-pagination {
    @apply bg-[#9F9D9D] w-2.5 h-0.5 mx-1;
    transition: .2s ease;
}
.product-slider-pagination-active {
    width: 70px!important;
    transition: .2s ease;
}
</style>