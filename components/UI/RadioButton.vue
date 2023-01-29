<template>
  <div class="flex gap-[8px] items-center">
    <div class="radio-button">
      <div v-if="value" class="radio-button-child"></div>
    </div>
    <div>{{title}}</div>
  </div>
</template>
<script lang="ts" setup>
defineProps(['title', 'value']);
</script>
<style>
.radio-button{
  width: 16px;
  border-radius: 2px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #202020;
}
.radio-button-child {
  border-radius: 1px;
  width:8px;
  height: 8px;
  background: #202020;
}
</style>