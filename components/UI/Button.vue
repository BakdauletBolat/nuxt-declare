<template>
  <button ref="ref" class="b-button py-[15.5px] w-full flex justify-center uppercase text-base"
          :class="{
              'bg-[#27213D] text-white': typeButton === 'primary',
              'bg-white text-[#27213DB2]': typeButton === 'secondary'
          }"
          @click="$emit('onClick')">
    <div class="flex gap-[10px] items-center">
      <slot></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';

defineProps({
  ref: {},
  typeButton: {
    default: 'primary'
  }
})

</script>
<style>
.b-button:focus {
  outline: 20px;
}
</style>