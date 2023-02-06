<template>
  <div class="grid gap-[20px]">
    <h2 class="uppercase text-[18px] mb-[28px]">Ваш заказ</h2>
    <CardItemPagination :items="cardStore.card?.attributes.items"></CardItemPagination>
    <CardTotal :card="cardStore.card"></CardTotal>
    <Button @click="navigator">Продолжить</Button>
  </div>
</template>
<script lang="ts" setup>
import CardItemPagination from '@/components/card-item-pagination/ui.vue';
import cardStore from '@/entities/card/model/store';
import CardTotal from '@/components/card-total/ui.vue';
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