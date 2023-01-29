<template>
  <div class="lg:flex hidden">
    <div class="last:pr-[0px] pr-[60px]" v-for="category in headerStore.categories[0]">
      <div @click="headerStore.nextPage(1, category.children.data, category)" 
            class="text-[rgba(39, 33, 61, 0.7)] cursor-pointer border-b-0" 
          >
        {{ category.attributes.name }}
      </div>
    </div>  
  </div>
  <div @click="closeMenu" class="left-0 w-screen top-[101px] absolute h-screen bg-[rgba(0,0,0,0.5)]"  v-if="headerStore.currentStep > 0">
    </div>
    <div class="z-[100] hidden lg:block absolute bg-white h-[560px] top-[101px] w-screen left-0" v-if="headerStore.currentStep > 0">
      <div class="container gap-[60px] mx-auto flex">
        <div @click="closeMenu" class="absolute cursor-pointer right-[15px] top-[20px]"><img src="@/assets/icons/exit.svg" alt=""></div>
        <div class="w-[240px] border-r my-[20px]">
          <Recurcive :depth="1" :items="headerStore.categories[headerStore.currentStep]"></Recurcive>
        </div>
        <CategoryMenu class="my-[20px]"></CategoryMenu>
      </div>
    </div>
</template>
<script lang="ts" setup>
import {useHeaderStore} from "@/stores/headerStore";
import CategoryMenu from "~/components/Header/CategoryMenu.vue";
import Recurcive from '@/components/Header/Recurcive.vue';

const headerStore = useHeaderStore();

const closeMenu = () => {
  headerStore.currentStep = 0;
  headerStore.activeCategory = undefined;
}

</script>
<style>
.active-link {
  @apply text-[#202020] border-b-[#202020] border-b;
}
</style>