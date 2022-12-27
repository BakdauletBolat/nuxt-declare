<template>
  <div class="lg:flex hidden">
    <div class="last:pr-[0px] pr-[60px]" v-for="category in headerStore.categories[0]">
      <div @click="headerStore.nextPage(1, category.children.data, category)" class="text-[#202020]">
        {{ category.attributes.name }}
      </div>
    </div>
    <div class="absolute bg-white h-[500px] top-full w-screen left-0" v-if="headerStore.currentStep > 0">
      <div class="container mx-auto flex">
        <div>
          <div v-for="childCategory in headerStore.categories[headerStore.currentStep]">
            {{ childCategory.attributes.name }}
          </div>
        </div>
        <CategoryMenu></CategoryMenu>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useHeaderStore} from "@/stores/headerStore";
import CategoryMenu from "~/components/Header/CategoryMenu.vue";

const headerStore = useHeaderStore();
</script>