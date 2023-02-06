<template>
  <SafeArea>
      <div class="container mx-auto px-[15px]">
        <h1 class="lg:mt-[48px] text-[32px] text-center text-medium">Оформление заказа</h1>
        <Steps class="lg:mt-[48px]"></Steps>
        <div class="grid create-order-nav items-start gap-[80px] mt-[48px]">
          <NuxtPage></NuxtPage>
          <div class="w-[1px] bg-[#E0E0E0] h-full"></div>
          <OrderDetail></OrderDetail>
        </div>
      </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import Steps from "~/pages/create-order/ui/steps.vue";
import OrderDetail from '@/widgets/order-detail/ui/index.vue';

</script>
<style>
.create-order-nav {
  grid-template-columns: 4fr 1px 3fr;
}
</style>