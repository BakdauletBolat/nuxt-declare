<template>
  <div>
    <Header></Header>
    <slot></slot>
    <FooterVue></FooterVue>
  </div>
</template>
<script lang="ts" setup>

import {onUnmounted, onMounted} from 'vue';
import {useHeaderStore} from "~/stores/headerStore";
import FooterVue from '~~/components/Footer/Footer.vue';

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
