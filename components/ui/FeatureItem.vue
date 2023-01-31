<template>
  <div class="feature-item border-b border-b-[#E0E0E0] flex gap-[12px] py-[16px] last:border-b-0">
    <div class="feature-item__key text-[#878787] text-base font-medium">{{keyItem}}</div>
    <div class="feature-item__value">{{value}}</div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps(['keyItem', 'value']);

</script>