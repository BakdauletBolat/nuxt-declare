<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import CategoryCard from './CategoryCard.vue';

const modules = [Pagination];

const pagination = {
    el: '.swiper-pagination',
    bulletActiveClass: 'category-slider-pagination-active',
    bulletClass: 'category-slider-pagination',
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
            :breakpoints="{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 36
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 48
                  }
            }"
            :pagination="pagination" :space-between="12"
            :slides-per-view="1" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <CategoryCard></CategoryCard>
        </swiper-slide>
        <swiper-slide>
            <CategoryCard></CategoryCard>
        </swiper-slide>
        <swiper-slide>
            <CategoryCard></CategoryCard>
        </swiper-slide>
        <swiper-slide>
            <CategoryCard></CategoryCard>
        </swiper-slide>
        <swiper-slide>
            <CategoryCard></CategoryCard>
        </swiper-slide>

        <!-- If we need pagination -->
        <div class="swiper-pagination flex pt-7 justify-center"></div>
        <div class="h-[50px]"></div>
    </swiper>
</template>
<style>
.category-slider-pagination {
    @apply bg-[#9F9D9D] w-2.5 h-0.5 mx-1;
    transition: .2s ease;
}

.category-slider-pagination-active {
    width: 70px !important;
    transition: .2s ease;
}
</style>