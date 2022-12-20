<script lang="ts" setup>
import LogoBlack from '@/assets/icons/logo-black.svg';
import {useHeaderStore} from "~/stores/headerStore";

const headerStore = useHeaderStore();

</script>
<template>
  <div class="header-logo">
    <img class="lg:h-[52px] lg:w-[112px] h-[34.29px] w-[100px]" :src="LogoBlack"/>
  </div>
</template>
