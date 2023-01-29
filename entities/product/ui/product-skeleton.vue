<template>
  <div class="grid grid-cols-2 lg:grid-cols-3">
    <div class="flex flex-col py-[96px] items-center px-[14px]">
      <Skeleton class="mb-[50px]" width="100%" height="127px"></Skeleton>
      <Skeleton class="mb-[16px]" width="100%" height="24px"></Skeleton>
      <Skeleton width="100%" height="24px"></Skeleton>
    </div>
    <div class="flex flex-col py-[96px] items-center px-[14px]">
      <Skeleton class="mb-[50px]" width="100%" height="127px"></Skeleton>
      <Skeleton class="mb-[16px]" width="100%" height="24px"></Skeleton>
      <Skeleton width="100%" height="24px"></Skeleton>
    </div>
    <div class="flex flex-col py-[96px] items-center px-[14px]">
      <Skeleton class="mb-[50px]" width="100%" height="127px"></Skeleton>
      <Skeleton class="mb-[16px]" width="100%" height="24px"></Skeleton>
      <Skeleton width="100%" height="24px"></Skeleton>
    </div>
  </div>
</template>
<script setup lang="ts">
import Skeleton from "~/components/UI/Skeleton.vue";
</script>