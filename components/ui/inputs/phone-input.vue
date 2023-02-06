<template>
  <div class="relative b-input-container w-full">
    <div class="relative">
      <div class="absolute z-10 b-placeholder top-1/2 -translate-y-1/2" :class="{
        'b-placeholder--active': isFocus || value
      }">{{ label }}
      </div>
      <input v-on="validationListeners"
             :value="value"
             :disabled="disabled"
             v-maska data-maska="+7 (###) ### ## ##"
             @focusin="isFocus = true"
             :type="type"
             @focusout="isFocus = false"
             :name="name"
             class="b-input w-full py-[8px] border-b border-b-[#878787]"/>
      <slot></slot>
    </div>
    <div v-if="errorMessage && meta.dirty" class="mt-[10px] text-red-500">
      {{ errorMessage }}
    </div>

  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {useField} from "vee-validate";
import {vMaska} from 'maska';

const props = defineProps(['label', 'type', 'name', 'disabled', 'defaultValue']);

const {errorMessage, meta, value, handleChange} = useField(props.name, undefined, {
  validateOnValueUpdate: false,
  initialValue: props.defaultValue
})

const validationListeners = {
  blur: handleChange,
  change: handleChange,
  input: (e: any) => handleChange(e, !!errorMessage.value)
}

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