<template>
  <div class="border h-full relative border-primary border-l-0 product-card">
    <div class="product-card-header absolute flex justify-between w-full items-center pt-[20px] px-[20px]">
      <div
          class="px-[12px] py-[3.5px] inline-block text-white bg-[#E4ABC7] rounded-2xl text-sm md:text-lg font-normal">
        -20 %
      </div>
      <Heart :product="product"></Heart>
    </div>
    <NuxtLink :to="{
            name: 'product-id',
            params: {
                id: product.id
            }
        }">
      <div class="product-card-img lg:pt-[56px] pt-[60px] lg:px-[112px] px-[28px] flex justify-center w-full">
        <img class="w-[124px] h-[124px] lg:w-[232px] lg:h-[232px] object-contain"
             :src="product.picture.data.attributes.url" alt="">
      </div>
    </NuxtLink>
    <section class="product-footer text-sm md:text-base lg:pt-[24px] pt-[20px] lg:pb-[96px] pb-[66px]">
      <NuxtLink :to="{
                name: 'product-id',
                params: {
                    id: product.id
                }
            }">
        <h3 class="text-center">{{ product.attributes.title }}</h3>
      </NuxtLink>
      <div class="flex justify-center pt-4 md:text-lg">
        <div class="text-[#636363] pr-3 line-through">{{ product.attributes.price }} ₸</div>
        <div>{{ product.attributes.old_price }} ₸</div>
      </div>
    </section>
    <div class="absolute flex right-[20px] bottom-[20px]">
      <basket :product="product"></basket>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import Heart from '@/entities/product/ui/heart.vue';
import {IProduct} from "@/models/product";
import Basket from "@/entities/product/ui/basket.vue";

const props = defineProps<{
  product: IProduct
}>();
</script>