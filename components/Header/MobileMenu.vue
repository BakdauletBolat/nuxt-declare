<template>
  <div
      class="bg-white px-4 py-6 duration-500 h-[100vh] overflow-scroll text-black absolute top-0 left-0 z-30 w-full -translate-y-[100%] transition-transform "
      :class="{'-translate-y-[0%]': headerStore.isOpenBurger}">
    <div class="h-16 flex justify-between items-center relative mx-auto container">
      <img @click="navigateBack" class="cursor-pointer absolute top-0 w-[12px]" :src="LeftArrow" alt=""/>
    </div>
    <div class="container mx-auto">
      <div class="mobile-menu-navigator">
        <div v-if="headerStore.categories[headerStore.currentStep].length <= 0">
          {{headerStore.activeCategory.attributes.name}}
          <CategoryMenu></CategoryMenu>
        </div>
        <div v-else class="flex cursor-pointer justify-between py-4"
             v-for="category in headerStore.categories[headerStore.currentStep]"
             @click="navigateNext(category)">
          <div>{{ category.attributes.name }}</div>
          <img :src="RightArrow" :alt="category.attributes.name"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RightArrow from '@/assets/icons/right-arrow.svg';
import LeftArrow from '@/assets/icons/left-arrow.svg';
import {useHeaderStore} from "~/stores/headerStore";
import {ICategory} from "~/models/category";
import CategoryMenu from "~/components/Header/CategoryMenu.vue";

const headerStore = useHeaderStore();

const navigateBack = () => {
  if (headerStore.currentStep === 1) {
    headerStore.changeIsOpenBurger(false);
    return;
  }
  headerStore.onBack();
}
const navigateNext = (category: ICategory) => {
  headerStore.nextPage(headerStore.currentStep + 1, category.children.data, category);
}
</script>

