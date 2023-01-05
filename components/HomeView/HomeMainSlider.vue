<script setup lang="ts">
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {onMounted} from "vue";
import HomeMainSliderItemVue from './HomeMainSliderItem.vue';
import {Pagination} from 'swiper';
import {useHomeStore} from "~/stores/homeStore";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.loadBanners();
});

const modules = [Pagination];

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'product-slider-pagination-active',
  bulletClass: 'product-slider-pagination bg-white',
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
          @swiper="onSwiper"

          @slideChange="onSlideChange">

    <swiper-slide v-for="item in homeStore.banners">
      <HomeMainSliderItemVue :item="item"></HomeMainSliderItemVue>
    </swiper-slide>

    <!-- If we need pagination -->
    <div class="swiper-pagination flex pb-7 justify-center"></div>
  </swiper>
</template>