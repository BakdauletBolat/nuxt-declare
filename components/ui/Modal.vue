<template>
    <Transition name="slide">
        <div v-if="open">
            <div @click="emit('handleCancel')"
                class=" outer w-full fixed top-0 right-0 h-screen cursor-pointer bg-[rgba(0,0,0,0.5)] z-[100]">
            </div>
            <div
                class="inner w-full fixed top-0 right-0 h-screen bg-white z-[100] lg:w-[494px]  p-[20px] overflow-scroll">
                <div class="h-16 flex justify-between items-center relative mx-auto container]">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 uppercase">
                      <slot name="title">
                        {{title}}
                      </slot>
                    </div>
                    <img @click="emit('handleCancel')" class="cursor-pointer absolute top-0 right-0" :src="ExitIcon"
                        alt="" />
                </div>
                <slot></slot>
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
.slide-enter-from .inner {
    transform: translateX(100%);
}

.slide-enter-to .inner {
    transform: translateX(0);
}

.slide-leave-from .inner {
    transform: translateX(0);
}

.slide-leave-to .inner {
    transform: translateX(100%);
}

.slide-leave-active .inner,
.slide-enter-active .inner {
    transition: all 0.2s ease;
}



.slide-enter-from .outer, .slider-leave-to .outer {
    opacity: 0;
}

.slide-enter-to .outer, .slide-leave-from .outer {
    opacity: 1;
}

.slide-enter-active .outer {
    transition: all 0.2s ease;
}

.slide-enter-active,
.slide-leave-active {
    z-index: 100;
    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    transition: all .2s ease;
}
</style>