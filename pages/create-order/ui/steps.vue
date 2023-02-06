<template>
  <div class="flex gap-[15px] justify-center ">
    <NuxtLink :to="{
      name: 'create-order'
    }" class="text-[16px] text-[#C7C7C7] uppercase" :class="{
      'text-[#202020]': activeRoute === 'create-order'
    }">1.Контактная информация</NuxtLink>
    <NuxtLink :to="{
      name: 'create-order-delivery-step'
    }" class="text-[16px] text-[#C7C7C7] uppercase"  :class="{
      'text-[#202020]': activeRoute === 'create-order-delivery-step'
    }">2.Доставка</NuxtLink>
    <NuxtLink :to="{
      name: 'create-order-checkout'
    }" class="text-[16px] text-[#C7C7C7] uppercase"  :class="{
      'text-[#202020]': activeRoute === 'create-order-checkout'
    }">3.Оплата</NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import {useRoute} from "vue-router";
const route = useRoute();
const activeRoute = ref();

watch(route, (newRoute)=>{
  activeRoute.value = newRoute.name
});

onMounted(()=>{
  activeRoute.value = route.name;
})

</script>