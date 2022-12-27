<template>
  <header class="px-[18px] header fixed bg-white transition-transform
                 z-[100] w-full border-b border-b-[#F5F5F5]"
          :class="{
                'translate-y-[-64px]': headerStore.hide,
                'lg:translate-y-[-100px]': headerStore.hide
          }">
    <div class="container mx-auto
                items-center lg:justify-between
                lg:h-[100px] h-[64px]
                grid-cols-3
                grid lg:flex">
      <div class="flex lg:hidden
                items-center">
        <HeaderBurger></HeaderBurger>
        <SearchIcon class="ml-[17px]" color="black"></SearchIcon>
      </div>
      <div class="flex justify-center">
        <HeaderLogo></HeaderLogo>
      </div>
      <DesktopMenu></DesktopMenu>
      <div class="flex items-center justify-end">
        <UserIcon color="black"></UserIcon>
        <HeartIcon width="20" height="18" class="ml-[17px]" color="black"></HeartIcon>
      </div>
      <MobileMenu
          v-if="headerStore.categories[headerStore.currentStep]"
      ></MobileMenu>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {ref, onMounted} from "vue";
import {useHeaderStore} from "~/stores/headerStore";
import SearchIcon from 'assets/icons/search.vue';
import HeartIcon from "assets/icons/heart.vue";
import UserIcon from "assets/icons/user.vue";
import MobileMenu from "~/components/Header/MobileMenu.vue";
import DesktopMenu from "~/components/Header/DesktopMenu.vue";


const headerStore = useHeaderStore();

onMounted(() => {
  headerStore.loadCategories({});
});

const language = ref({
  value: 'RU',
  title: 'РУ'
});
const options = [
  {
    value: 'RU',
    title: 'РУ'
  },
  {
    value: 'KAZ',
    title: 'ҚАЗ'
  },
  {
    value: 'ENG',
    title: 'АНГ'
  }
]

const onChange = (value: any) => {
  language.value = value;
}
</script>