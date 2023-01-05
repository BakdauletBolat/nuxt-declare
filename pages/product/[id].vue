<style lang="scss">
.main-slider {
  width: 100%;
  height: 320px;

  @media screen and (min-width: 1024px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    height: 452px;
    width: 452px;
  }

  & img {
    height: 260px;
    width: 100%;

    @media screen and (min-width: 1280px) {
      height: 400px;
      width: 452px;
    }
  }
}

.thumb-slider {

  height: 300px;
  width: 104px;

  @media screen and (min-width: 1280px) {
    height: 452px;
    width: 103px;
    box-sizing: border-box;
  }
}

.thumb-slider .swiper-slide {
  opacity: 0.4;
  height: 104px;
}

.thumb-slider .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
<template>
  <SafeArea>
    <Breadcrumb back-link="/" backTitle="Обратно к списку" :options="options"></Breadcrumb>
    <div class="container mx-auto px-4" v-if="product">
      <div class="page flex xl:gap-[60px] lg:gap-[40px] lg:flex-row flex-col gap-[28px]">
        <div class="flex xl:gap-[70px] lg:gap-[40px]">
          <div class="lg:block hidden">
            <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="1" :breakpoints="{
              1024: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              }
            }" direction="vertical" :freeMode="true" :watchSlidesProgress="true" :modules="modules"
              class="thumb-slider">
              <swiper-slide v-for="image in product?.pictures.data"><img :src="image.attributes.url" /></swiper-slide>
            </swiper>
          </div>
          <div class="flex w-full">
            <swiper v-if="thumbsSwiper" :pagination="pagination" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
              class="main-slider relative">
              <swiper-slide v-for="image in product?.pictures.data"><img :src="image.attributes.url" /></swiper-slide>
              <div class="swiper-pagination absolute z-[100] bottom-0 left-1/2 -translate-x-1/2 flex justify-center">
              </div>
            </swiper>
          </div>
        </div>
        <ProductDetail :product="product!"></ProductDetail>
      </div>
      <div class="grid grid-cols-1 lg:gap-[40px] lg:grid-cols-2 gap-[28px]">
        <div class="product-desc">
          <h3 class="uppercase">ОПИСАНИЕ</h3>
          <p class="mt-[20px]">{{product?.attributes.description}}</p>
        </div>
        <div class="mt-[36px]">
          <h3 class="uppercase">ХАРАКТЕРИСТИКА</h3>
          <div class="grid grid-cols-1">
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
            <FeatureItem keyItem="Для кого:" value="Для женщин"></FeatureItem>
          </div>
        </div>
      </div>
    </div>
  </SafeArea>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { ref, onMounted } from 'vue';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import Breadcrumb from "~/components/UI/Breadcrumb.vue";
import FeatureItem from '@/components/UI/FeatureItem.vue';
import productService from '~~/services/product-service';
import { useRoute } from 'vue-router';
import { IProduct } from '~~/models/product';

let thumbsSwiper = ref(null);

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'product-slider-pagination-active',
  bulletClass: 'product-slider-pagination',
  clickable: true,
  // dynamicBullets: true
}

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
}

const modules = [FreeMode, Navigation, Thumbs, Pagination];

const
  options = [{
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Product',
    to: '/'
  }];




const product = ref<IProduct | undefined>(undefined);
const route = useRoute();
const getProduct = async () => {
  const data:IProduct = await productService.getProduct(route.params.id);
  console.log(data);
  product.value = data;
}
onMounted(() => {
  getProduct();
})
</script>
