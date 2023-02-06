<template>
  <BaseInput type="text" @change-value="changeValueEmit" :disabled="disabled" :name="name" :label="label"
             :default-value="defaultValue"></BaseInput>
</template>
<script setup lang="ts">
import BaseInput from "~/components/ui/inputs/base-input.vue";

const emit = defineEmits(['changeValue']);

const changeValueEmit = (value: any) => {
  emit('changeValue', value);
}

const props = defineProps(['label', 'name', 'disabled', 'defaultValue']);
</script>
<style lang="scss">
.b-placeholder {
  pointer-events: none;
  transition: 0.2s ease;
  font-size: 16px;

  &--active {
    transition: 0.2s ease;
    top: 0;
    font-size: 12px;
  }
}

.b-input {
  border-radius: 0;

  &:focus {
    outline: none;
  }
}
</style>