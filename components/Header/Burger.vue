<template>
    <div class=" cursor-pointer space-y-[4px] focus:outline-none"   @click="emit('change')">
        <div class="w-5 h-0.5 bg-white rounded transform transition  ease-in-out"  :class="{'rotate-45': state,'translate-y-1.5': state,'bg-black':isActive || state }"></div>
        <div class="w-5 h-0.5 bg-white rounded transform transition  ease-in-out" :class="{'opacity-0': state,'bg-black':isActive }"></div>
        <div class="w-5 h-0.5 bg-white rounded transform transition  ease-in-out" :class="{'-rotate-45': state,'-translate-y-1.5': state,'bg-black':isActive || state }"></div>
    </div>
</template>
<script lang="ts" setup>
import {defineProps,defineEmits} from 'vue';

const emit = defineEmits(['change']);
defineProps(['state','isActive']);
</script>