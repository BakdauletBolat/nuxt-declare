<style>
</style>
<template>
    <div class="border h-full relative border-primary border-l-0">
        <div class="product-card-header absolute flex justify-between w-full items-center pt-[20px] px-[20px]">
            <div
                class="px-[12px] py-[3.5px] inline-block text-white bg-[#E4ABC7] rounded-2xl text-sm md:text-lg font-normal">
                -20 %
            </div>
            <div class="inline-block">
                <Heart width="26" height="24" color="#27213D80"></Heart>
            </div>
        </div>
        <RouterLink :to="{
            name: 'product-id',
            params: {
                id: product.id
            }
        }">
            <div class="product-card-img lg:pt-[56px] pt-[60px] lg:px-[112px] px-[28px] flex justify-center w-full">
            <img class="w-full object-contain" :src="product.picture.data.attributes.url" alt="">
        </div>
        </RouterLink>
        
        <div class="product-footer text-sm md:text-base lg:pt-[24px] pt-[20px] lg:pb-[96px] pb-[66px]">
            <RouterLink :to="{
                name: 'product-id',
                params: {
                    id: product.id
                }
            }">
            <h3 class="text-center">{{product.attributes.title}}</h3>
            </RouterLink>
            <div class="flex justify-center pt-4 md:text-lg">
                <div class="text-[#636363] pr-3 line-through">{{product.attributes.price}} ₸</div>
                <div >{{product.attributes.old_price}} ₸</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Heart from "assets/icons/heart.vue";
import ProductTestImg from '@/assets/ring.png';
import {defineProps} from 'vue';
import {IProduct} from "~/models/product";
import { ICollection } from "~~/models/collection";

defineProps<{
  product: IProduct
}>()

</script>