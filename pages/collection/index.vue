<template>
  <SafeArea>
    <div class="grid gap-[20px] container mx-auto px-[15px]">
      <div v-for="chunked_array in CollectionStore.collection_chunked"
           class="group__collection grid grid-cols-6 gap-[20px]">
        <div class="group__collection__item" v-for="(collection, index) in chunked_array">
          <with-images-slider-card v-if="index == 4" :collection="collection"></with-images-slider-card>
          <basic-card v-else :collection="collection"></basic-card>
        </div>
      </div>
    </div>
  </SafeArea>
</template>
<style lang="scss">
.group__collection__item {
  @apply col-span-3 border border-[black];
  &:first-child {
    @apply col-span-6;
  }

  &:nth-child(4) {
    @apply col-span-4;
  }

  &:nth-child(5) {
    @apply col-span-2;
  }
}
</style>
<script lang="ts" setup>
import BasicCard from "~/entities/collection/ui/basic-card.vue";
import CollectionStore from '@/entities/collection/model/store';
import WithImagesSliderCard from '@/entities/collection/ui/with-images-slider-card/index.vue';

onMounted(() => {
  CollectionStore.loadCollections();
})

</script>