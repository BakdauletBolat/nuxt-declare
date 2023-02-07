<template>
  <Button class="text-center block" @click="navigator">Продолжить</Button>
</template>
<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
import {useRoute} from "vue-router";

const route = useRoute();

const navigator = () => {
  if (route.name === 'create-order') {
    navigateTo({
      name: 'create-order-delivery-step'
    })
  }
  if (route.name === 'create-order-delivery-step') {
    navigateTo({
      name: 'create-order-checkout'
    })
  }
}

</script>