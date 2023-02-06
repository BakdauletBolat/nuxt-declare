<template>
  <BaseInput :type="isOpen ? 'text': 'password'" :name="name" :default-value="defaultValue" :label="label"
             :disabled="disabled">
    <img alt="password-icon" @click="isOpen = !isOpen"
         class="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2" :src="isOpen ? CloseImg : OpenImg"/>
  </BaseInput>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import CloseImg from '@/assets/icons/close.png';
import OpenImg from '@/assets/icons/open.png';
import BaseInput from "~/components/ui/inputs/base-input.vue";

const props = defineProps(['label', 'name', 'defaultValue', 'disabled'])
const isOpen = ref(false);
</script>