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
  <div class="grid container items-center mx-auto py-[25.5px] gap-[24px]+ lg:gap-0 lg:grid-cols-3 px-3">
    <router-link v-if="backTitle" class="flex gap-[10px] text-[#878787] uppercase" :to="
    typeof backLink == 'string' ? backLink : {
      name: backLink.name,
      params: backLink.params
    }
    ">
      <img :src="LeftArrow" alt="">
      <div>Обратно к списку</div>
    </router-link>
    <div class="flex uppercase items-center lg:justify-center text-[#878787]">
      <span class="breadcrumb" v-for="item in options">
        <router-link :to="
        typeof item.to == 'string' ? item.to : {
          name: item.to.name,
          params: item.to.params
        }
        ">
          {{ item.title }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftArrow from 'assets/icons/left-arrow.svg';

interface IBreadcrump {
  title: string;
  to: string | {
    name: string;
    params: any
  }
}

defineProps<{
  options: IBreadcrump[],
  backTitle?: string;
  backLink?: string | {
    name: string;
    params: any;
  }
}>();

</script>