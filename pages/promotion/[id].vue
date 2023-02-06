<template>
  <SafeArea>
    <Breadcrumb :back-title="'Назад'" :options="options"></Breadcrumb>
    <div v-if="promotionStore.promotion.data" class="container mx-auto px-[15px]">
      <img class="w-full lg:h-[620px] h-[200px]"
           :alt="promotionStore.promotion.data.attributes?.title"
           :src="promotionStore.promotion?.data.picture?.data.attributes.url"/>
      <div class="mt-[28px] text-[#525252] text-center text-[16px]">26 АВГУСТА 2022 ГОДА</div>
      <h1 class="text-[21px] text-[#202020] mt-[20px]">{{ promotionStore.promotion.data.attributes?.title }}</h1>
      <p class="mt-[16px] text-[#202020]">{{ promotionStore.promotion.data.attributes?.description }}</p>
    </div>
  </SafeArea>

</template>
<script lang="ts" setup>
import promotionStore from '@/entities/promotion/model/store';
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import {useRoute} from "vue-router";

const route = useRoute();

const loadPromotionList = async () => {
  await promotionStore.loadPromotion(parseInt(route.params.id.toString()));
  options.value.push({
    title: promotionStore.promotion!.data!.attributes?.title
  })
}
onMounted(() => {
  loadPromotionList();
})

const options = ref([
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Акций'
  }
]);
</script>