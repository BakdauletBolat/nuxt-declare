<template>
    <div v-if="items" class="flex flex-col gap-[30px]">
        <CardItem v-for="item in items" :cardItem="item"></CardItem>
    </div>
</template>
<script lang="ts" setup>
import CardItem from '@/entities/card/ui/CardItem.vue';
import { ICardItem } from '@/entities/card/model/interface';

defineProps<{
    items?: ICardItem[] | undefined
}>();
</script>
<style lang="scss">

</style>