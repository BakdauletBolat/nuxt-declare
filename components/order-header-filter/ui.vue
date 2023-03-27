<template>
    <div class="flex justify-between lg:justify-start lg:gap-[32px]">
        <OrderHeaderItem :is-active="orderStore.activeStatus == item.value" @click="orderStore.changeStatus(item)"
            :item="item" v-for="item in orderStore.statuses"></OrderHeaderItem>
    </div>
</template>
<script lang="ts" setup>
import OrderHeaderItem from './order-header-item.vue';
import { useOrderStore } from '@/entities/order/model/store';
const orderStore = useOrderStore();
</script>