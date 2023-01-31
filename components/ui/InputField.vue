<template>
  <div class="relative b-input-container w-full">

    <div class="relative">
      <div class="absolute z-10 b-placeholder top-1/2 -translate-y-1/2" :class="{
        'b-placeholder--active': isFocus || value
      }">{{ placeholder }}
      </div>
      <input @input="onInput($event)" v-maska :data-maska="isPhone ? '+7 (###) ### ## ##' : ''" autocomplete="off"
        :aria-autocomplete="false" :value="value" :disabled="disabled" min="0" max="5000000" @focusin="isFocus = true"
        :type="isOpen ? 'text' : type" @focusout="isFocus = false"
        class="b-input w-full py-[8px] border-b border-b-[#878787]" :name="name" />
      <img alt="isOPen" v-if="type === 'password'" @click="isOpen = !isOpen"
        class="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2" :src="isOpen ? CloseImg : OpenImg" />
    </div>
    <div v-if="errorMessage" class="mt-[10px] text-red-500">
      {{ errorMessage }}
    </div>
  </div>


</template>
<script setup lang="ts">
import { ref } from 'vue';
import CloseImg from '@/assets/icons/close.png';
import OpenImg from '@/assets/icons/open.png';
import { vMaska } from 'maska';
defineProps(['name', 'disabled', 'placeholder', 'value', 'errorMessage', 'type', 'isPhone']);
const emit = defineEmits(['update:value']);
const onInput = (event: any) => {
  emit('update:value', event.target.value);
}

const isOpen = ref(false);
const isFocus = ref(false);


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