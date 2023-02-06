<template>
  <NewsSkeleton v-if="isLoading" v-for="_ in Array.from([0,1,3])"></NewsSkeleton>
  <NewsCard v-else :item="item" v-for="item in items" :key="item.id"></NewsCard>
</template>
<script lang="ts" setup>
import {INews} from "~/entities/news/model/interface";
import NewsCard from "~/entities/news/ui/NewsCard.vue";
import NewsSkeleton from "~/entities/news/ui/NewsSkeleton.vue";

defineProps<{
  items?: INews[],
  isLoading: boolean
}>();

</script>