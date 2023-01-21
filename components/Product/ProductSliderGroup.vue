<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/vue';
import ProductCard from './ProductCard.vue';
import {Pagination} from 'swiper';
import {defineProps} from 'vue';
import {IProduct} from "~/models/product";
const modules = [Pagination];

defineProps<{
  products: IProduct[]
}>()

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'product-slider-pagination-active',
  bulletClass: 'product-slider-pagination',
  clickable: true,
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

    <swiper-slide v-for="product in products">
        <ProductCard :product="product"></ProductCard>
    </swiper-slide>
    <!-- If we need pagination -->
    <div class="swiper-pagination flex pt-7 justify-center"></div>
    <div class="h-[50px]"></div>
  </swiper>
</template>
