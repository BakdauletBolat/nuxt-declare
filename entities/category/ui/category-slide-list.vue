<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {defineProps} from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';
import CategorySlide from './category-slide.vue';
import {ICategory} from "~/models/category";

const modules = [Pagination];

defineProps<{
  items: ICategory[]
}>();

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'category-slider-pagination-active',
  bulletClass: 'category-slider-pagination',
  clickable: true,
}

const breakPoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 36
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 48
  }
}

</script>
<template>
  <swiper v-if="items"
          :modules="modules"
          :breakpoints="breakPoints"
          :pagination="pagination"
          :space-between="12"
          :slides-per-view="1">

    <swiper-slide  v-for="item in items" :key="item.id">
      <CategorySlide :item="item"></CategorySlide>
    </swiper-slide>

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