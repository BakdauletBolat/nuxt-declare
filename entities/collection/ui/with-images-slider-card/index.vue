<template>
  <div class="grid gap-[40px] h-full w-full py-[40px]">
    <p class="text-center">{{ collection.attributes.title }}</p>
    <swiper
        class="h-full w-full"
        :slides-per-view="1"
        :navigation="navigation"
        :modules="modules"
        :space-between="20"
    >

      <swiper-slide :key="product.id" v-for="product in products">
        <CardItem :product="product"></CardItem>
      </swiper-slide>
      <div
          class="absolute w-[20px] cursor-pointer h-[20px] right-[20px] -translate-y-1/2 top-1/2 z-30 collection-next-button">
        <img class="w-full h-full object-contain" :src="NextEl">
      </div>
      <div
          class="absolute w-[20px] cursor-pointer h-[20px] left-[20px] -translate-y-1/2 top-1/2 z-30 collection-prev-button">
        <img class="w-full h-full object-contain" :src="PrevEl">
      </div>
    </swiper>
    <NuxtLink class="inline-block uppercase mx-auto text-[16px] text-[#525252] py-[4px] border-b border-b-[#525252]"
              :to="{
    name: 'collection-id',
    params: {
      id: collection.id
    }
  }">Показать коллекцию
    </NuxtLink>
  </div>

</template>
<script lang="ts" setup>
import {ICollection} from "@/models/collection";
import {IProduct} from "@/models/product";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NextEl from '@/assets/icons/next-el.svg';
import PrevEl from '@/assets/icons/prev-el.svg';
import ProductService from "~/services/product-service";
import CardItem from "~/entities/collection/ui/with-images-slider-card/card-item.vue";

const modules = [Navigation];

const isLoading = ref<boolean>(false);
const products = ref<IProduct[]>([])

const navigation = {
  nextEl: '.collection-next-button',
  prevEl: '.collection-prev-button',
};

const props = defineProps<{
  collection: ICollection
}>();

onMounted(async () => {
  isLoading.value = true;
  try {
    products.value = (await ProductService.getProducts({
      collection_id: props.collection.id
    })).data;
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
});


</script>