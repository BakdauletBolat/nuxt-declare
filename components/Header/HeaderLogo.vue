<script lang="ts" setup>
    import {defineProps} from 'vue';
    import LogoWhite from '@/assets/icons/logo-white.svg';
    import LogoBlack from '@/assets/icons/logo-black.svg';
    defineProps(['isActive']);
</script>
<template>
    <div class="header-logo">
        <img class="lg:h-[32px]w-[90px] h-[52px] w-[112px]" :src="isActive ? LogoBlack : LogoWhite" />
    </div>
</template>
