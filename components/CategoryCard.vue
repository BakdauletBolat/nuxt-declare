<template>
    <div class="relative bg-primary h-[368px] flex items-center justify-center relative">
        <div class="category-card-img">
            <img class="h-[232px] w-[232px] object-contain" :src="CategoryTestImg" alt="">
        </div>
        <div class="category-footer absolute bottom-[48px]">
            <h3 class="text-center">КОЛЬЦА</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
import Heart from "../assets/icons/heart.vue";
import CategoryTestImg from '@/assets/ring.png';
</script>