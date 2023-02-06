<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <Breadcrumb :options="options"></Breadcrumb>
      <PromotionList v-if="promotionStore.promotionsList?.data"
                     :items="promotionStore.promotionsList.data"></PromotionList>
    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import promotionStore from '@/entities/promotion/model/store';
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import PromotionList from "@/entities/promotion/ui/PromotionList.vue";

onMounted(() => {
  promotionStore.loadPromotionsList()
});
const options = [
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Акций'
  }
]
</script>