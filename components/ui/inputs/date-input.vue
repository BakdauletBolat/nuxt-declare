<template>
  <BaseInput :name="name" :default-value="defaultValue"
             :label="label"
             type="date"
             :disabled="disabled">
  </BaseInput>
</template>
<script setup lang="ts">
import BaseInput from "~/components/ui/inputs/base-input.vue"
const props = defineProps(['label', 'name', 'defaultValue', 'disabled'])
</script>