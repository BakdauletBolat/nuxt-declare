<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <h1 class="lg:mt-[48px] mt-[24px] text-[32px] text-center text-medium">Оформление заказа</h1>
      <Steps class="lg:mt-[48px] mt-[24px]"></Steps>
      <div class="grid create-order-nav items-start lg:gap-[80px] gap-[32px] lg:mt-[48px] mt-[32px]">
        <div>
          <NuxtPage></NuxtPage>
          <Navigator class="lg:hidden flex mt-[32px]"></Navigator>
        </div>
        <div>
          <div class="lg:w-[1px] w-full bg-[#E0E0E0] h-[1px] lg:h-full"></div>
        </div>
        <div>
          <OrderDetail></OrderDetail>
        </div>
      </div>

    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import Steps from "~/pages/create-order/ui/steps.vue";
import OrderDetail from '@/widgets/order-detail/ui/index.vue';
import Navigator from "~/pages/create-order/ui/navigator.vue";
import userStore from "~/stores/userStore";
import {useCreateOrderStore} from '@/entities/order/model/store';

const createOrderStore = useCreateOrderStore();

onMounted(() => {
  if (userStore.user) {
    createOrderStore.user_contact! = userStore.user;
  }
});

</script>
<style>
.create-order-nav {
  grid-template-columns: 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 4fr 1px 3fr;
  }
}
</style>