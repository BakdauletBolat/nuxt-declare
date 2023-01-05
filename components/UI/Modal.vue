<template>
    <Transition name="slide">
        <div v-if="open">
            <div class="w-full fixed top-0 right-0 h-screen bg-black z-[100]">
            </div>
            <div class="w-full fixed top-0 right-0 h-screen bg-white z-[100]  p-[20px]">

                <div class="h-16 flex justify-between items-center relative mx-auto container]">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 uppercase">{{ title }}</div>
                    <img @click="emit('handleCancel')" class="cursor-pointer absolute top-0 right-0" :src="ExitIcon"
                        alt="" />
                </div>

            </div>
        </div>
    </Transition>
</template>
<script lang="ts" setup>
import ExitIcon from '@/assets/icons/exit.svg';
const emit = defineEmits(['handleCancel'])
const props = defineProps(['open', 'title']);
</script>
<style>
.slide-enter-from {
    transform: translateX(100%);
}
.slide-enter-to {
    transform: translateX(0);
}
.slide-enter-active {
    z-index: 100;
    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    transition: all .2s ease;
}
</style>