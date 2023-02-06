<template>
  <div class="flex flex-col lg:flex-row justify-between gap-[20px]">
    <Skeleton width="350px" height="40px"></Skeleton>
    <Skeleton width="100px" height="40px"></Skeleton>
  </div>
</template>
<script setup lang="ts">
import Skeleton from "~/components/ui/Skeleton.vue";
</script>