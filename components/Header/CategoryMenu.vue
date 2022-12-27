<template>
  <MobileMenuSkeleton v-if="headerStore.isLoadingCategoriesMenu"></MobileMenuSkeleton>
  <div v-else class="flex flex-col w-full lg:flex-row lg:gap-[50px]">
    <div v-for="(items, key) in headerStore.categoriesMenu">
      <div class="text-base text-[#C7C7C7] py-[16px]">{{ key }}</div>
      <div class="py-[16px] text-base" v-for="item in items">
        {{ item.attributes.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useHeaderStore} from "~/stores/headerStore";
import MobileMenuSkeleton from "~/components/Header/MobileMenuSkeleton.vue";

const headerStore = useHeaderStore();
</script>
