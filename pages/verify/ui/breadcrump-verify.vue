<template>
    <Breadcrumb :options="[{
        title: 'Регистрация',
        to: '/registration'
    },
    {
        title: 'Верификация',
        to: '/verify'
    }]"></Breadcrumb>
</template>
<script lang="ts" setup>
import Breadcrumb from '@/components/UI/Breadcrumb.vue';
</script>