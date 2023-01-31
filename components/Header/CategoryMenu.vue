<template>
  <MobileMenuSkeleton v-if="headerStore.isLoadingCategoriesMenu"></MobileMenuSkeleton>
  <div v-else-if="headerStore.categoriesMenu" class="flex flex-col w-full lg:flex-row lg:gap-[40px]">
    <div v-for="(items, key) in headerStore.categoriesMenu">
      <div class="text-base text-[#C7C7C7] py-[10px]">{{ key }}</div>
      <div v-if="items" class="py-[10px] text-base" v-for="item in items">
        <NuxtLink @click="()=>{
          headerStore.changeIsOpenBurger(false);
          headerStore.currentStep = 0;
        }" :to="{
          name: 'category-id',
          params: {
            id: headerStore.activeCategory?.id
          }
        }">{{ item.attributes.name }}</NuxtLink>
      </div>
    </div>
  </div>
  <div v-else>
    Нет категориев
  </div>
</template>
<script setup lang="ts">
import {useHeaderStore} from "~/stores/headerStore";
import MobileMenuSkeleton from "~/components/Header/MobileMenuSkeleton.vue";

const headerStore = useHeaderStore();
</script>
