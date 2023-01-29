<template>
  <div v-if="items" class="flex flex-col gap-[27px] h-[300px] overflow-scroll">
    <CardItemPreview v-for="item in items"
                     :key="item.id"
                     :card-item="item"></CardItemPreview>
    <Button v-if="!isLastPage" @click="onLoadMore">Заргузить еще {{page}}</Button>
  </div>
</template>
<script setup lang="ts">
import {ICardItem} from "@/entities/card/model/interface";
import CardItemPreview from "@/entities/card/ui/CardItemPreview.vue";
import Button from "~/components/UI/Button.vue";

const page = ref<number>(1);
const emit = defineEmits(['load-more'])

const onLoadMore = () => {
  page.value += page.value;
  emit('load-more', page.value);
}
defineProps<{
  items?: ICardItem[],
  isLastPage: boolean
}>();
</script>