<template>
  <NuxtLink :to="to" class="flex w-full justify-between">
    <div class="uppercase text-[16px]">{{title}}</div>
    <img alt="Back" src="@/assets/icons/right-arrow.svg"/>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps(['to', 'title']);
</script>