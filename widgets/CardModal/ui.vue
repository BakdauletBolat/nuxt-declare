<template>
    <CardList :items="cardStore.card?.items"></CardList>
</template>
<script lang="ts" setup>
    import CardList from '@/components/CardList/ui/index.vue';
    import cardStore from '@/entities/card/model/store';
</script>