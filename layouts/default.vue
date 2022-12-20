<template>
  <div>
    <Header></Header>
    <slot/>
  </div>
</template>
<script lang="ts" setup>

import {onUnmounted, onMounted} from 'vue';
import {useHeaderStore} from "~/stores/headerStore";

const headerStore = useHeaderStore();

const handleScroll = () => {
  headerStore.useScrollActive();
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
