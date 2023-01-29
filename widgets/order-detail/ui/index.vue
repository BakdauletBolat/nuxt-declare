<template>
  <div>
    <h2 class="uppercase text-[18px] mb-[28px]">Ваш заказ</h2>
    <CardItemPagination :isLastPage="isLastPage" :items="cardStore.card?.attributes.items"
                        @load-more="onLoadMore"></CardItemPagination>
    <div>
      <div>{{cardStore.card?.attributes.price}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardItemPagination from '@/components/card-item-pagination/ui.vue';
import cardStore from '@/entities/card/model/store';

const isLastPage = ref(false);
const onLoadMore = async (page: number) => {
  isLastPage.value = await cardStore.loadMoreCard(page);
}
</script>