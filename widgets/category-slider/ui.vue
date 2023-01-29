<template>
  <CategorySlideList :items="CategoryStore.categories">
  </CategorySlideList>
</template>
<script setup lang="ts">
import CategorySlideList from "~/entities/category/ui/category-slide-list.vue";
import CategoryStore from './store';

onMounted(()=>{
  CategoryStore.loadCategories();
});
</script>