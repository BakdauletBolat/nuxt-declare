<template>
  <product-skeleton v-if="isLoading"></product-skeleton>
  <swiper v-else :modules="modules"
          :pagination="pagination" :slides-per-view="2"
          :breakpoints="{
                768: {
                    slidesPerView: 3
                }
            }"
  >
    <swiper-slide v-for="product in items">
      <ProductCard :product="product"></ProductCard>
    </swiper-slide>
    <!-- If we need pagination -->
    <div class="swiper-pagination flex pt-7 justify-center"></div>
    <div class="h-[50px]"></div>
  </swiper>
</template>
<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/vue';
import ProductCard from './product-card.vue';
import ProductSkeleton from "@/entities/product/ui/product-skeleton.vue";
import {Pagination} from 'swiper';
import {defineProps} from 'vue';
import {IProduct} from "~/models/product";

const modules = [Pagination];

defineProps<{
  items: IProduct[],
  isLoading: boolean
}>()

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'product-slider-pagination-active',
  bulletClass: 'product-slider-pagination',
  clickable: true,
}


</script>