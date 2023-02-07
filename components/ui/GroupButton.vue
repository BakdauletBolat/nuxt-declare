<template>
  <div v-if="sizeGroup">
    <h4 class="uppercase mb-[24px] text-[#202020] text-lg">Размер товара</h4>
    <div class="flex justify-between">
      <NuxtLink class="cursor-pointer px-[10px] font-medium text-[#27213D] text-[#27213DB2]"
                :class="{
                  'font-bold text-[#27213D]': productId === item.id,

             }"

                :to="{
          name: 'product-id',
          params: {
            id: item.attributes.product_id
          }
            }" v-for="item in sizeGroup">
        {{ item.attributes.size }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
defineProps(['productId', 'sizeGroup'])
</script>