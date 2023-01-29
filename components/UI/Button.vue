<template>
  <button ref="ref" class="b-button py-[15.5px] w-full flex justify-center uppercase text-base"
          :class="{
              'bg-[#27213D] text-white': typeButton === 'primary',
              'bg-white text-[#27213DB2]': typeButton === 'secondary',
              'bg-white border border-[#27213D] text-[#27213DB2]': typeButton === 'bordered'
          }"
          @click="$emit('onClick')">
    <div class="flex gap-[10px] items-center">
      <div v-if="isLoading">
        <Spinner :color="typeButton === 'primary' ? 'white' : '#27213D'"></Spinner>
      </div>
      <slot v-else></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import Spinner from "~/components/UI/Spinner.vue";
defineProps({
  ref: {},
  isLoading: {
    default: false
  },
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