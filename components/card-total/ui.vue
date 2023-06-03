<template>
  <div v-if="card" class="flex flex-col gap-[16px] p-[20px] bg-[#F5F5F5]">
    <div class="flex text-[16px] justify-between">
      <div>{{card.attributes?.items.length}} товаров на сумму</div>
      <div>{{card.attributes?.total}} ₸</div>
    </div>
    <div class="flex text-[16px] justify-between">
      <div>Доставка</div>
      <div>от 399 ₸</div>
    </div>
    <div class="flex text-[16px] justify-between">
      <div>Сумма скидок и акций</div>
      <div>{{ card.attributes.total_sale }} ₸</div>
    </div>
    <div class="h-[1px] w-full bg-[#E0E0E0]"></div>
    <div class="flex text-[18px] justify-between">
      <div>Итого</div>
      <div>{{card.attributes?.total}} ₸</div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import {ICard} from "~/entities/card/model/interface";

defineProps<{
  card?: ICard
}>();
</script>