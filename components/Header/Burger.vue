<template>
  <div @click="headerStore.changeIsOpenBurger(!headerStore.isOpenBurger)"
       class="w-[20px] h-[15px] cursor-pointer space-y-[5.33px] focus:outline-none">
    <div class="w-[20px] h-[1.33px] bg-black rounded transform transition  ease-in-out"
         :class="{'rotate-45': headerStore.isOpenBurger,'translate-y-1.5': headerStore.isOpenBurger}"></div>
    <div class="w-[20px] h-[1.33px] bg-black rounded transform transition  ease-in-out"
         :class="{'opacity-0': headerStore.isOpenBurger}"></div>
    <div class="w-[20px] h-[1.33px] bg-black rounded transform transition  ease-in-out"
         :class="{'-rotate-45': headerStore.isOpenBurger,'-translate-y-1.5': headerStore.isOpenBurger}"></div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue';
import {useHeaderStore} from "~/stores/headerStore";

const headerStore = useHeaderStore();
</script>