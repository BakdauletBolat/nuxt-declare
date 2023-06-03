<template>
  <div class="relative bg-[#F5F5F5] h-[376px] flex items-center justify-center relative">
    <NuxtLink :to="{
      name: 'category-id',
      params: {
        id: item.id
      }
    }">
        <div class="category-card-img">
      <img class="h-[232px] w-[232px] object-cover mb-[12px]" :src="item.picture?.data?.attributes.url" alt="">
    </div>
    </NuxtLink>

    <div class="category-footer absolute bottom-[48px]">
      <NuxtLink :to="{
        name: 'category-id',
        params: {
          id: item.id
        }
      }">
          <h3 class="text-center text-[#202020] text-[18px] uppercase">{{ item.attributes.name }}</h3>
      </NuxtLink>

    </div>
  </div>
</template>
<script setup lang="ts">
import {ICategory} from "@/models/category";

defineProps<{
  item: ICategory
}>();

</script>