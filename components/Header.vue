<template>
  <header class="px-[18px] header fixed bg-white transition-transform
                 z-[100] w-full"
          :class="{
                'translate-y-[-64px]': headerStore.hide
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
      <div class="lg:flex hidden">
        <div class="last:pr-[0px] pr-[60px]" v-for="menuItem in headerStore.menuList">
          <div class="text-[#202020]">{{ menuItem.title }}</div>
        </div>
      </div>
      <div class="flex items-center justify-end">
        <UserIcon color="black"></UserIcon>
        <HeartIcon class="ml-[17px]" color="black"></HeartIcon>
      </div>
      <MobileMenu></MobileMenu>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useHeaderStore} from "~/stores/headerStore";
import SearchIcon from 'assets/icons/search.vue';
import HeartIcon from "assets/icons/heart.vue";
import UserIcon from "assets/icons/user.vue";
import MobileMenu from "~/components/Header/MobileMenu.vue";


const headerStore = useHeaderStore();

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