<script lang="ts" setup>
import LogoBlack from '@/assets/icons/logo-black.svg';
import {useHeaderStore} from "~/stores/headerStore";
import userStore from '~~/stores/userStore';

const headerStore = useHeaderStore();

</script>
<template>
  <div class="header-logo">
    <RouterLink to="/"><img alt="Логотип" class="lg:h-[52px] lg:w-[112px] h-[34.29px] w-[100px]" :src="LogoBlack"/></RouterLink>
  </div>
</template>
