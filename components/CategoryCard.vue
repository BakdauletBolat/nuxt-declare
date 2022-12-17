<template>
    <div class="relative bg-primary h-[368px]">
        <div class="category-card-img pt-14 flex justify-center w-full ">
            <img class="w-[200px] h-[200px] object-contain" :src="CategoryTestImg" alt="">
        </div>
        <div class="category-footer pt-12">
            <h3 class="text-center">КОЛЬЦА</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
import Heart from "../assets/icons/heart.vue";
import CategoryTestImg from '@/assets/ring.png';
</script>