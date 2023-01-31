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

  height: 332px;
  width: 104px;

  @media screen and (min-width: 1280px) {
    height: 452px;
    width: 104px;
    box-sizing: border-box;
  }
}

.thumb-slider .swiper-slide {
  height: 104px !important;
  width: 104px;

  & img {
    width: 100%;
    height: 100%;
  }
}

.thumb-slider .swiper-slide-thumb-active {
  border: 1px solid #E0E0E0;
}
</style>
<template>
  <SafeArea>
    <Breadcrumb back-link="/" backTitle="Обратно к списку" :options="options"></Breadcrumb>
        <div class="container mx-auto px-4" v-if="product">
          <div class="page flex xl:gap-[60px] lg:gap-[40px] lg:flex-row flex-col gap-[28px]">
            <div class="flex xl:gap-[70px] lg:gap-[40px]">
              <div class="lg:block hidden">
                <div class="flex justify-center mb-2">
                  <img @click="prevThumbSlider" class="thumb-next-el cursor-pointer"
                    src="@/assets/icons/arrow-top.svg" />
                </div>
                <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="1" :allow-slide-next="true"
                  :allow-slide-prev="true" :breakpoints="{
                    1024: {
                      slidesPerView: 3
                    },
                    1280: {
                      slidesPerView: 4
                    }
                  }" direction="vertical" :modules="modules" class="thumb-slider">
                  <swiper-slide v-for="image in product?.pictures.data"><img class="object-contain cursor-pointer "
                      :src="image.attributes.url" /></swiper-slide>
                </swiper>
                <div class="flex justify-center mt-2">
                  <img @click="nextThumbSlider" class="thumb-prev-el cursor-pointer"
                    src="@/assets/icons/arrow-bottom.svg" />
                </div>
              </div>
              <div class="flex w-full">
                <swiper v-if="thumbsSwiper" :pagination="pagination" @swiper="setMainSlider"
                  :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="main-slider relative">
                  <swiper-slide v-for="image in product?.pictures.data"><img class="object-contain"
                      :src="image.attributes.url" /></swiper-slide>
                  <div
                    class="swiper-pagination absolute z-[100] bottom-0 left-1/2! -translate-x-1/2! flex justify-center">
                  </div>
                </swiper>
              </div>
            </div>
            <ProductDetail class="w-full" :product="product"></ProductDetail>
          </div>
          <div class="grid grid-cols-1 lg:gap-[40px] lg:grid-cols-2 gap-[28px] mt-[36px]">
            <div class="product-desc">
              <h3 class="uppercase">ОПИСАНИЕ</h3>
              <p v-html="product.attributes.description" class="mt-[20px]"></p>
            </div>
            <div class="mt-[36px] lg:mt-[0px]">
              <h3 class="uppercase">ХАРАКТЕРИСТИКА</h3>
              <div class="grid grid-cols-1">
                <FeatureItem keyItem="Для кого" :value="product.customer_type.data.attributes.name"></FeatureItem>
                <FeatureItem keyItem="Цвет" :value="product.color.data.attributes.name"></FeatureItem>
                <FeatureItem keyItem="Сonstituent" :value="product.constituent.data.attributes.name"></FeatureItem>
                <FeatureItem keyItem="Позиция" :value="product.position.data.attributes.name"></FeatureItem>
                <FeatureItem keyItem="Автор" :value="product.creator.data.attributes.name"></FeatureItem>
                <FeatureItem keyItem="Cover" :value="product.cover.data.attributes.name"></FeatureItem>
                <FeatureItem v-if="product.collections.data.length > 0" keyItem="Коллекция"
                  :value="product.collections.data.map(item => item.attributes.title).join(', ')"></FeatureItem>
              </div>
            </div>
          </div>
        </div>
    
        <ProductDetailSkeleton v-if="loading"></ProductDetailSkeleton>
      
  </SafeArea>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ref, onMounted } from 'vue';
import { FreeMode, Navigation, Pagination, Thumbs, type Swiper as SwiperRef } from 'swiper';
import Breadcrumb from "@/components/ui/Breadcrumb.vue";
import FeatureItem from '@/components/ui/FeatureItem.vue';
import productService from '~~/services/product-service';
import { useRoute } from 'vue-router';
import { IProduct } from '~~/models/product';

const thumbsSwiper = ref<SwiperRef | null>(null);
const mainSlider = ref<SwiperRef | null>(null);
const loading = ref<boolean>(false);

const pagination = {
  el: '.swiper-pagination',
  bulletActiveClass: 'product-slider-pagination-active',
  bulletClass: 'product-slider-pagination',
  clickable: true
}

const nextThumbSlider = () => {
  mainSlider.value!.slideNext();
}

const prevThumbSlider = () => {
  mainSlider.value!.slidePrev();
}

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
}

const setMainSlider = (swiper: any) => {
  mainSlider.value = swiper;
}

const modules = [FreeMode, Navigation, Thumbs, Pagination];

const options = ref([{
  title: 'Главная',
  to: '/'
}]);

const product = ref<IProduct | undefined>(undefined);
const route = useRoute();
const getProduct = async () => {
  loading.value = true;
  const data: IProduct = await productService.getProduct(route.params.id);
  product.value = data;
  options.value.push({
    title: data.attributes.title,
    to: ''
  });
  loading.value = false;
}
onMounted(() => {
  getProduct(); 
})
</script>
