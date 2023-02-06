<template>
  <div class="promotion-card">
    <section class="w-full h-full border border-[#E0E0E0]">
      <img :alt="item.attributes.title" class="w-full h-full" :src="item.picture?.data.attributes?.url"/>
    </section>
    <NuxtLink>
      <div class="more-button">Подробнее</div>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import {IPromotion} from "~/entities/promotion/model/interface";

defineProps<{
  item: IPromotion
}>();
</script>
<style lang="scss">
.promotion-card {
  @apply h-[600px] relative;

  &:first-child {
    .more-button {
      @apply translate-x-0 left-[80px] bottom-[89px];
    }

    @apply col-span-2 h-[472px];
  }
}

.more-button {
  @apply uppercase absolute bottom-[64px] left-1/2 -translate-x-1/2 py-[4px] border-b border-b-[black];
}
</style>