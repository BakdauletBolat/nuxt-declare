<template>
  <div class="grid gap-[20px]">
    <h2 class="uppercase text-[18px] mb-[28px]">Ваш заказ</h2>
    <CardItemPagination :items="cardStore.card?.attributes.items"></CardItemPagination>
    <CardTotal :card="cardStore.card"></CardTotal>
    <Navigator class="lg:flex hidden"></Navigator>
  </div>
</template>
<script lang="ts" setup>
import CardItemPagination from '@/components/card-item-pagination/ui.vue';
import cardStore from '@/entities/card/model/store';
import CardTotal from '@/components/card-total/ui.vue';
import Navigator from "~/pages/create-order/ui/navigator.vue";

</script>