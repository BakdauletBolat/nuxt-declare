<template>
    <Breadcrumb :options="[{
        title: 'Регистрация',
        to: '/registration'
    },
    {
        title: 'Верификация'
    }]"></Breadcrumb>
</template>
<script lang="ts" setup>
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
</script>