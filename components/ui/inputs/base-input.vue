<template>
  <div class="relative b-input-container w-full">
    <div class="relative">
      <div class="absolute z-10 b-placeholder top-1/2 -translate-y-1/2" :class="{
        'b-placeholder--active': isFocus || FieldValue
      }">{{ label }}
      </div>
      <input v-on="validationListeners"
             :value="FieldValue"
             :disabled="disabled"
             @focusin="isFocus = true"
             :type="type"
             @focusout="isFocus = false"
             :name="name"
             :id="name"
             class="b-input w-full py-[8px] border-b border-b-[#878787]"/>
      <slot></slot>
    </div>
    <div v-if="errorMessage && meta.dirty || errorMessage && meta.touched" class="mt-[10px] text-red-500">
      {{ errorMessage }}
    </div>

  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {useField} from "vee-validate";

const props = defineProps(['label', 'value', 'type', 'name', 'disabled', 'defaultValue']);

const name = toRef(props, 'name');

const {errorMessage, meta, value: FieldValue, handleChange, handleBlur} = useField(name, undefined, {
  validateOnValueUpdate: false,
  initialValue: props.defaultValue
})

const emit = defineEmits(['changeValue']);

const validationListeners = {
  blur: handleBlur,
  input: (e:any)=>{
    handleChange(e.target.value);
    emit('changeValue', e.target.value);
  },
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