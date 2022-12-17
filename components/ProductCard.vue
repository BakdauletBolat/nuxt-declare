<template>
    <div class="border relative border-primary h-[370px] md:h-[472px]">
        <div class="product-card-header flex justify-between w-full items-center pt-[20px] px-[20px]">
            <div
                class="px-[12px] py-[3.5px] inline-block bg-[#EEEEEE] rounded-2xl text-sm md:text-lg text-[#343434] font-normal">
                -20 %
            </div>
            <div class="inline-block">
                <Heart></Heart>
            </div>
        </div>
        <div class="product-card-img pt-14 flex justify-center w-full">
            <img class="w-[150px] md:w-[200px] w-full max-h-[200px] object-contain" :src="ProductTestImg" alt="">
        </div>
        <div class="product-footer pt-12 text-sm md:text-base">
            <h3 class="text-center">Кольцо обручальное Declare...</h3>
            <div class="flex justify-center pt-4 md:text-lg">
                <div class="text-[#636363] pr-3 line-through">175 000 ₸</div>
                <div >140 000 ₸</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Heart from "../assets/icons/heart.vue";
import ProductTestImg from '@/assets/ring.png';
</script>