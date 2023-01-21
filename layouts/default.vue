<template>
  <div>
    <notifications />
    <Header></Header>
    <slot></slot>
    <FooterVue></FooterVue>
  </div>
</template>
<script lang="ts" setup>

import { onUnmounted, onMounted } from 'vue';
import { useHeaderStore } from "~/stores/headerStore";
import FooterVue from '~~/components/Footer/Footer.vue';
import Header from '@/components/Header.vue';

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
