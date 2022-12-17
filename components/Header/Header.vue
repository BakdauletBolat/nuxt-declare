<template>
  <div class="header relative" :class="{'header-on-scroll': isActive,'header-hide': isHide}">
    <header class="desktop-menu container items-center hidden justify-between mx-auto px-5 lg:flex">
      <HeaderLogo :isActive="isActive"></HeaderLogo>
      <div class="flex basis-5/12 items-center justify-between relative">
        <div @click="burgerState=true" class="font-normal tracking-[.25px]" v-for="page in pages">
          {{page.title}}
        </div>
      </div>
      <div class="basis-2/12 items-center flex">
        <Select class="mr-5 cursor-pointer" :isActive="isActive" :value="language" :options="options" @change="onChange"></Select>
        <SearchIcon class="mx-1.5 cursor-pointer"  :color="isActive ? 'black': 'white'"></SearchIcon>
        <UserIcon class="mx-1.5 cursor-pointer"  :color="isActive ? 'black': 'white'"></UserIcon>
        <HeartIcon class="mx-1.5 cursor-pointer"  :color="isActive ? 'black': 'white'"></HeartIcon>
        <ShopIcon class="mx-1.5 cursor-pointer"  :color="isActive ? 'black': 'white'"></ShopIcon>
      </div>
    </header>
    <header class="mobile-menu container items-center flex justify-between mx-auto px-5 lg:hidden">
      <div class="flex items-center relative">
        <Burger :class="{'z-30': burgerState}" :isActive="isActive" :state="burgerState" @change="burgerState=!burgerState"></Burger>
        <SearchIcon class="cursor-pointer ml-5"  :color="isActive ? 'black': 'white'"></SearchIcon>
      </div>
      <HeaderLogo :isActive="isActive"></HeaderLogo>
      <div class="flex items-center">
        <UserIcon class="cursor-pointer"  :color="isActive ? 'black': 'white'"></UserIcon>
        <ShopIcon class="ml-5 cursor-pointer"  :color="isActive ? 'black': 'white'"></ShopIcon>
      </div>
    </header>
    <MobileMenu  class="block lg:hidden -translate-x-full transition duration-300" :class="{
        '-translate-x-0': burgerState
    }" @changeState="changeBurgerState" ></MobileMenu>
    <DesktopMenu v-if="burgerState"  class="hidden lg:block" @changeState="changeBurgerState"></DesktopMenu>
  </div>
</template>
<script lang="ts" setup>
import HeaderLogo from '@/components/Header/HeaderLogo.vue';
import Select from '@/components/UI/Select.vue';
import {ref,defineProps,defineEmits} from "vue";
import SearchIcon from "@/assets/icons/search.vue";
import UserIcon from "@/assets/icons/user.vue";
import HeartIcon from "@/assets/icons/heart.vue";
import ShopIcon from "@/assets/icons/shop.vue";
import Burger from "@/components/Header/Burger.vue";
import MobileMenu from "@/components/Header/MobileMenu.vue";
import DesktopMenu from "@/components/Header/DesktopMenu.vue";

defineProps(['isActive','isHide']);
const burgerState = ref(false);

const changeBurgerState = () => {
  burgerState.value = false;
}

const pages = [
  {
    url: '/',
    title: 'Ювелирные изделия',
  },
  {
    url: '/',
    title: 'Свадьба',
  },
  {
    url: '/',
    title: 'Подарки',
  },
  {
    url: '/',
    title: 'Серебро',
  }
]

const language = ref({
  value: 'RU',
  title:'РУ'
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

const onChange = (value:any) => {
  language.value = value;
}
</script>