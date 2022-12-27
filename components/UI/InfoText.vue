<template>
  <div class="flex text-[#202020] text-base gap-[10px] items-center">
    <slot>
    </slot>
    <div class="relative">
      <InfoIcon @mouseenter="onFocus" @mouseleave="onUnFocus" class="cursor-pointer" color="#BEBDC5"></InfoIcon>
      <div @mouseenter="onFocus" @mouseleave="onUnFocus" v-if="isOpenInfo" class="p-10 absolute">
        <div class="bg-[#595959] w-full top-0 p-1  left-[15px] text-[12px] text-white absolute">
          <slot name="info-text"></slot>
        </div>
      </div>

    </div>
  </div>


</template>
<style>

</style>
<script setup lang="ts">
import InfoIcon from '@/assets/icons/info.vue';
import {ref} from 'vue';

const isOpenInfo = ref(false);


const onFocus = () => {
  isOpenInfo.value = true;
}

const onUnFocus = () => {
  isOpenInfo.value = false;
}
</script>