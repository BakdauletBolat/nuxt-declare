<template>
  <div class="border-b-[#E0E0E0] border-b py-[48px]">
    <div class="grid gap-[40px] lg:grid-cols-2 w-full container mx-auto px-[15px]">
      <section class="w-full h-[380px] border border-[#E0E0E0]">
        <img :alt="item.attributes.title" class="w-full h-full object-cover" :src="item.picture?.data.attributes?.url"/>
      </section>
      <section class="flex flex-col justify-between items-center">
        <div class="uppercase text-[18px] text-[#878787] text-center">26 августа 2022 года</div>
        <div class="uppercase mt-[28px] text-[32px] text-[#202020] text-center">{{ item.attributes.title }}</div>
        <div class="text-[16px] mt-[20px]">{{ item.attributes.small_description }}</div>
        <NuxtLink :to="{
          name: 'news-id',
          params: {
            id: item.id
          }
        }">
          <div class="mt-[32px] text-[18px] cursor-pointer uppercase text-center">Читать далее</div>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {INews} from "~/entities/news/model/interface";

defineProps<{
  item: INews
}>();
</script>