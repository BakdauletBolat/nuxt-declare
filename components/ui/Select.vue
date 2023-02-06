<template>
    <div class="select relative py-[8px] border-b border-b-[#878787]">
        <BaseInput type="hidden" :default-value="defaultValue" :name="name" default-value="1"></BaseInput>
        <div @click="open" class="flex items-center cursor-pointer">
            <div class="mr-2">
            {{value.title}}
        </div>
        <Dropdown class="transition-transform" :class="{
            'select-open': isOpen
        }" :color="isActive ? 'black' : 'white'"></Dropdown>
        </div>
        
        <div :class="{
          'select-container-open': isOpen
        }"  class="min-w-[72px] h-[300px] overflow-scroll w-full origin-top scale-y-0 translate-y-[-10px] top-full transition-transform absolute top shadow-md bg-white text-black p-2">
        <div @click="changeSelect(option)" class="border-b cursor-pointer hover:bg-amber-50 py-2 last:border-none border-[#F5F5F5]" v-for="option in options">
            {{option.title}}
        </div>
    </div>
    </div>
    
</template>
<script setup lang="ts">

import { defineProps, defineEmits, ref } from 'vue';
import Dropdown from '@/assets/icons/dropdown.vue';
import BaseInput from "~/components/ui/inputs/base-input.vue";
import {prop} from "dom7";
const isOpen = ref<boolean>(false);

    const open = () => {
        isOpen.value = !isOpen.value
    }

const emit = defineEmits(['change']);
const props = defineProps(['value', 'options','isActive','name', 'defaultValue']);

const changeSelect = (value:any) => {
    emit('change',value);
    if (props.defaultValue) {
      emit('change', props.defaultValue);
    }
    isOpen.value = false;
}

</script>
<style>
    .select-open {
        @apply rotate-180;
    }
    .select-container-open {
      @apply scale-y-100 translate-y-0;
    }
</style>