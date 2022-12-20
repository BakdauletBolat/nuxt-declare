<template>
  <div
      class="bg-white px-4 py-6 duration-500 h-[100vh] text-black absolute top-0 left-0 z-30 w-full -translate-y-[100%] transition-transform "
      :class="{'-translate-y-[0%]': headerStore.isOpenBurger}">
    <div class="h-16 flex justify-between items-center relative mx-auto container">
      <img @click="navigateBack" class="cursor-pointer absolute top-0 w-[12px]" :src="LeftArrow"/>
    </div>
    <div class="container mx-auto">
      <div class="mobile-menu-navigator">
        <div v-for="menu_item in headerStore.menuList">
          <div class="flex cursor-pointer justify-between py-4" @click="changeActiveMenu(menu_item)">
            <div>{{ menu_item.title }}</div>
            <img :src="RightArrow" :alt="menu_item.title"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RightArrow from '@/assets/icons/right-arrow.svg';
import {useHeaderStore} from "~/stores/headerStore";
import LeftArrow from '@/assets/icons/left-arrow.svg';

const headerStore = useHeaderStore();

const navigateBack = () => {
  if (!headerStore.activeCategoryMenu) {
    headerStore.changeIsOpenBurger(false);
    return;
  }

}

</script>

