<template>
  <Button class="text-center block" @click="navigator">Продолжить</Button>
</template>
<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
import { useRoute } from "vue-router";
import { validate_delivery_step } from "../model/service";
import {useCreateOrderStore} from '@/entities/order/model/store'

const route = useRoute();

const createOrderStore =useCreateOrderStore();

const navigator = async () => {
  if (route.name === 'create-order') {
    navigateTo({
      name: 'create-order-delivery-step'
    });
    return;
  }
  if (route.name === 'create-order-delivery-step') {
    const isValid = validate_delivery_step();
    if (isValid) {
      navigateTo({
        name: 'create-order-checkout'
      })
      return;
    }
  }

  if (route.name === 'create-order-checkout') {
    try {
      await createOrderStore.createOrder();
      navigateTo({
        name: 'success'
      });
    }
    catch (e) {
      console.log(e);
    }
  }
}

</script>