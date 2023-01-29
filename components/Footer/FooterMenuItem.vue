<template>
  <div>
    <div @click="handleSwitch" class="cursor-pointer flex py-4 justify-between items-center">
      <div class="text-lg lg:text-xl uppercase font-medium">{{ title }}</div>
      <LargeDropdown class="lg:hidden" :class="{
      'rotate-180': isOpen
    }"></LargeDropdown>
    </div>
    <div class="lg:block hidden" :class="{
    '!block': isOpen
  }">
      <div v-if="items === undefined || items.length <= 0">
        <div class="py-2">Нет данных</div>
      </div>
      <div class="py-2" :key="item.title" v-for="item in items">
        <router-link :to="item.url">{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, ref} from 'vue';
import LargeDropdown from '@/assets/icons/large-dropdown.vue';

const isOpen = ref(false);

const handleSwitch = () => {
  isOpen.value = !isOpen.value;
}

defineProps<{
  title: string;
  items?: {
    title: string;
    url: string;
  }[]
}>();

</script>