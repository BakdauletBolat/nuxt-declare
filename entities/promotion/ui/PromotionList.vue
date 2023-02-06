<template>
  <div class="grid gap-[40px] lg:grid-cols-2">
    <PromotionCard v-if="items" :item="item" v-for="item in items" :key="item.id"></PromotionCard>
  </div>
</template>
<script lang="ts" setup>
import {IPromotion} from "@/entities/promotion/model/interface";
import PromotionCard from "@/entities/promotion/ui/PromotionCard.vue";

defineProps<{
  items?: IPromotion[]
}>();

</script>