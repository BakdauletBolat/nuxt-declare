<style lang="scss">
.breadcrumb {
  font-size: 10px;

  &:after {
    padding: 0 5px;
    content: '/';
  }

  &:last-child {
    &:after {
      content: "";
    }
  }
}
</style>
<template>
  <div class="grid container items-center mx-auto gap-[24px] py-[20px] lg:gap-0 lg:grid-cols-3 px-3"
       :class="{'justify-center': centered}">
    <section v-if="backTitle">
      <div @click="navigateBack" class="flex gap-[10px] cursor-pointer text-[#878787] uppercase">
        <img :src="LeftArrow" alt="">
        <div>{{ backTitle }}</div>
      </div>
    </section>
    <section v-if="options" class="flex col-span-3 justify-center  uppercase text-[#878787]"
             :class="{
      '!justify-start col-span-2': backTitle
              }">
      <span  class="breadcrumb" v-for="item in options">
        <NuxtLink v-if="item.to" :to="
        typeof item.to == 'string' ? item.to : {
          name: item.to.name,
          params: item.to.params
        }
        ">
          {{ item.title }}
        </NuxtLink>
        <span v-else>
          {{ item.title }}
        </span>
      </span>
    </section>
  </div>
</template>

<script lang="ts" setup>
import LeftArrow from 'assets/icons/left-arrow.svg';
import {useRouter} from "vue-router";

const router = useRouter();

const navigateBack = () => {
  router.back();
}

export interface IBreadcrump {
  title: string;
  to: string | {
    name: string;
    params: any
  } | undefined;
}

defineProps<{
  centered?: boolean,
  options?: IBreadcrump[],
  backTitle?: string;
  backLink?: string | {
    name: string;
    params: any;
  }
}>();

</script>