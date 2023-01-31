<template>
  <div>
    <h4 class="uppercase mb-[24px] text-[#202020] text-lg">Размер товара</h4>
    <div class="flex justify-between">
      <div class="cursor-pointer px-[10px] font-medium text-[#27213D] text-[#27213DB2]"
           :class="{
                  'font-bold text-[#27213D]': activeId === item.id,

             }"
           @click="$emit('onChange', item)" v-for="item in options">
        {{ item.size }}
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';

defineProps(['activeId'])
const options = [
  {
    id: 1,
    size: '16.5'
  },
  {
    id: 2,
    size: '17'
  },
  {
    id: 3,
    size: '17.5'
  },
  {
    id: 4,
    size: '18'
  }
]
</script>