<template>
    <div class="select relative ">
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
        }"  class="min-w-[72px] origin-top scale-y-0 translate-y-[-10px] transition-transform rounded absolute top-8 shadow-md bg-white text-black p-2">
        <div @click="changeSelect(option)" class="border-b cursor-pointer py-2 last:border-none border-[#F5F5F5]" v-for="option in options">
            {{option.title}}
        </div>
    </div>
    </div>
    
</template>
<script setup lang="ts">

import { defineProps, defineEmits, ref } from 'vue';
import Dropdown from '@/assets/icons/dropdown.vue';
const isOpen = ref<boolean>(false);

    const open = () => {
        isOpen.value = !isOpen.value
    }

const emit = defineEmits(['change']);
defineProps(['value', 'options','isActive']);

const changeSelect = (value:any) => {
    emit('change',value);
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