<template>
    <div class="container mx-auto flex flex-col justify-center items-center lg:items-end h-[588px]">
        <div class="flex flex-col items-start lg:w-[390px]">
            <Skeleton class="m-[10px] flex justify-center items-center" width="270px" height="40px"></Skeleton>
            <Skeleton class="m-[10px] flex justify-center items-center" width="300px" height="150px"></Skeleton>
            <Skeleton class="m-[10px] flex justify-center items-center" width="250px" height="35px"></Skeleton>
        </div>
    </div>
</template>
<script setup lang="ts">
import Skeleton from '@/components/ui/Skeleton.vue';
</script>