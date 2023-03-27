<template>
    <header class="px-[18px] header fixed bg-white transition-transform
                   z-[100] w-full border-b border-b-[#F5F5F5]" :class="{
                     'translate-y-[-64px]': headerStore.hide,
                     'lg:translate-y-[-100px]': headerStore.hide
                   }">
      <div class="container mx-auto
                  items-center lg:justify-between
                  lg:h-[100px] h-[64px]
                  w-full
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
          <NuxtLink :to="{
            name: userRoute
          }">
            <UserIcon color="black"></UserIcon>
          </NuxtLink>
          <NuxtLink class="pl-[17px]" :to="{
            name: 'favorites'
          }">
            <HeartIcon width="20" height="18" color="black"></HeartIcon>
          </NuxtLink>
          <div @click="cardStore.openModal()" class="cursor-pointer pl-[17px]">
            <CardIcon width="20" height="18"  color="black"></CardIcon>
          </div>
        </div>
        <MobileMenu v-if="headerStore.categories[headerStore.currentStep]"></MobileMenu>
      </div>
    </header>
  </template>
  <script lang="ts" setup>
  import {onMounted} from "vue";
  import {useHeaderStore} from "@/stores/headerStore";
  import SearchIcon from 'assets/icons/search.vue';
  import HeartIcon from "assets/icons/heart.vue";
  import UserIcon from "assets/icons/user.vue";
  import MobileMenu from "@/components/Header/MobileMenu.vue";
  import DesktopMenu from "@/components/Header/desktop/DesktopMenu.vue";
  import CardIcon from "@/assets/icons/card-icon.vue";
  import cardStore from '@/entities/card/model/store';
  
  const headerStore = useHeaderStore();
  
  
  const userRoute = computed(() => {
    if (process.client) {
      return window.innerWidth < 1024 ? 'profile' : 'profile-user-information';
    }
    return 'profile';
  })
  
  onMounted(() => {
    headerStore.loadCategories({});
  });
  </script>