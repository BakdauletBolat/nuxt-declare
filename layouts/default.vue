<template>
  <div>
     <Header :isHide="isHide" :isActive="isActive"></Header>
    <slot/>
  </div>
</template>
<script lang="ts" setup>

import { onUnmounted, onMounted, ref } from 'vue';
import useScrollActive from "@/hooks/useScrollActive";
const isActive = ref(false);
const isHide = ref(false);

const changeIsActive = (value:boolean) => {
  isActive.value = value;
}

const changeIsHide = (value:boolean) => {
  isHide.value = value;
}

const handleScroll = () => {
  useScrollActive(changeIsActive,changeIsHide,isActive.value,isHide.value);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
