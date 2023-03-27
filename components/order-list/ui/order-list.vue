<template>
    <OrderItem :item="item" v-for="item in orderStore.orders.data"></OrderItem>
</template>
<script lang="ts" setup>
import OrderItem from '@/entities/order/ui/OrderItem.vue';
import { useOrderStore } from '@/entities/order/model/store';
const orderStore = useOrderStore();
onMounted(() => {
    orderStore.loadOrders();
});
</script>