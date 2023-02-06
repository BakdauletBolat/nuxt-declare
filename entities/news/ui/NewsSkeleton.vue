<template>
  <div class="flex flex-col gap-[20px]">
    <Skeleton class="w-full h-[380px]"></Skeleton>
    <Skeleton class="w-full h-[30px]"></Skeleton>
    <Skeleton class="w-full h-[50px]"></Skeleton>
    <Skeleton class="w-full h-[20px]"></Skeleton>
  </div>
</template>
<script lang="ts" setup>
import Skeleton from "~/components/ui/Skeleton.vue";
</script>