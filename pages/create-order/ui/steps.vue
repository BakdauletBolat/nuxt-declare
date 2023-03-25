<template>
  <div class="flex gap-[15px] justify-center ">
    <NuxtLink :to="{
      name: 'create-order'
    }" class="step-item" :class="{
      '!text-[#202020]': activeRoute === 'create-order'
    }">1. Ваши контакты
    </NuxtLink>
    <NuxtLink :to="{
      name: 'create-order-delivery-step'
    }" class="step-item" :class="{
      '!text-[#202020]': activeRoute === 'create-order-delivery-step'
    }">2.Доставка
    </NuxtLink>
    <NuxtLink :to="{
      name: 'create-order-checkout'
    }" class="step-item" :class="{
      '!text-[#202020]': activeRoute === 'create-order-checkout'
    }">3.Оплата
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import {useRoute} from "vue-router";
import { validate_delivery_step } from "../model/service";

const route = useRoute();
const activeRoute = ref();

watch(route, (newRoute) => {
  activeRoute.value = newRoute.name
});

onMounted(() => {
  activeRoute.value = route.name;
})

</script>
<style lang="scss">
.step-item {
  @apply lg:text-[16px] text-[12px] text-[#C7C7C7] gap-[7px] flex justify-start items-center uppercase;
  &:after {
    content: "\1433";
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
}
</style>