<template>
  <div v-if="items" class="flex flex-col gap-[27px]">
    <CardItemPreview v-for="item in items"
                     :key="item.id"
                     :card-item="item"></CardItemPreview>
  </div>
</template>
<script setup lang="ts">
import {ICardItem} from "@/entities/card/model/interface";
import CardItemPreview from "@/entities/card/ui/CardItemPreview.vue";
defineProps<{
  items?: ICardItem[],
}>();
</script>