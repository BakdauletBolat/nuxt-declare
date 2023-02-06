<template>
  <div class="relative flex flex-col lg:flex-row p-[20px] gap-[20px]">
    <section class="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2" v-if="backTitle">
      <div @click="navigateBack" class="flex gap-[10px] cursor-pointer text-[#878787] uppercase">
        <img :src="LeftArrow" alt="">
        <div>{{ backTitle }}</div>
      </div>
    </section>
    <div class="text-[21px] w-full lg:text-[32px] text-[#202020] tracking-[0.25px] text-center"
         :class="{
    '!text-left': alignment == 'left',
    '!text-right': alignment == 'right'
       }">{{ title }}
    </div>
  </div>

</template>
<script lang="ts" setup>
import LeftArrow from 'assets/icons/left-arrow.svg';
import {useRouter} from "vue-router";

const router = useRouter();

const navigateBack = () => {
  router.back();
}

defineProps<{
  title: string,
  alignment?: string,
  backTitle?: string;
}>();
</script>