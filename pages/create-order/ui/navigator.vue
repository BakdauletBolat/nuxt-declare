<template>
  <Button class="text-center block" @click="navigator">Продолжить</Button>
</template>
<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
import { useRoute } from "vue-router";
import { validate_delivery_step } from "../model/service";


const route = useRoute();

const navigator = () => {
  if (route.name === 'create-order') {
    navigateTo({
      name: 'create-order-delivery-step'
    })
  }
  if (route.name === 'create-order-delivery-step') {
    const isValid = validate_delivery_step();
    if (isValid) {
      navigateTo({
        name: 'create-order-checkout'
      })
    }
  }
}

</script>