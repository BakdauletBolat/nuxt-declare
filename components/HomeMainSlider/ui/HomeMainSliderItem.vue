<template>
  <div class="h-[588px] w-full flex items-center main-bg">
    <div class="container mx-auto h-full">
      <div class="lg:flex lg:flex-row lg:items-end lg:justify-end h-full">
        <div class="lg:max-w-[375px] lg:pt-0 lg:pb-0 lg:justify-center lg:items-start
                  w-full flex flex-col items-center justify-between h-full pt-[72px] pb-[54px]">
          <h2 class="lg:text-3xl text-[21px] font-medium">{{ item.attributes.title }}</h2>
          <p class="lg:block text-base mt-7 hidden">{{ item.attributes.description }}</p>
          <a href="#" class="pb-2 mt-10 inline-block text-base uppercase border-b-[0.5px]">ПОДРОБНЕЕ ОБ
            АКЦИИ</a>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { IBanner } from "~/models/banner";

const props = defineProps<{
  item: IBanner
}>();

const url = `bg-[url('${props.item.picture.data.attributes.url}')]`

</script>
<style>
.main-bg {
  background-image: url(@/assets/images/banner-main.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>