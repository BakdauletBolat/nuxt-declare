<template>
  <div>
    My Orders
  </div>
</template>
<script lang="ts" setup>
import service from '@/entities/order/service';

onMounted(async ()=>{
  const res = await service.getOrders();
  console.log(res);
})
</script>