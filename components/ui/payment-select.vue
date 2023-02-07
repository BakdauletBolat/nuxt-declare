<template>
  <div>
    <section
        @click="onChange(1)"
        class="flex gap-[12px] py-[16px] cursor-pointer border-b-[#F5F5F5] border-b last:border-b-0">
      <div
          class="shrink-0 delivery-select w-[19px] h-[19px] border border-[#27213D] rounded-[18px] flex items-center justify-center">
        <div
            v-if="1 == activeOption"
            class="shrink-0 delivery-select-child w-[8.5px] h-[8.5px] bg-[#27213D] rounded-[8.4px]"></div>
      </div>
      <div class="flex w-full justify-between">
        <div class="flex flex-col">
          <div class="text-[16px] text-[#202020]">Онлайн-оплата банковской картой</div>
          <div class="flex gap-[12px] mt-[8px]">
            <div class="payment-item">
              <img :src="MaestroSvg"/>
            </div>
            <div class="payment-item">
              <img :src="MasterCardSvg"/>
            </div>
            <div class="payment-item">
              <img :src="VisaSvg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
        @click="onChange(2)"
        class="flex gap-[12px] py-[16px] cursor-pointer border-b-[#F5F5F5] border-b last:border-b-0">
      <div
          class="shrink-0 delivery-select w-[19px] h-[19px] border border-[#27213D] rounded-[18px] flex items-center justify-center">
        <div
            v-if="2 == activeOption"
            class="shrink-0 delivery-select-child w-[8.5px] h-[8.5px] bg-[#27213D] rounded-[8.4px]"></div>
      </div>
      <div class="flex w-full justify-between">
        <div class="flex flex-col">
          <div class="text-[16px] text-[#202020]">Наличными или картой при получении</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const activeOption = ref(1);
const emit = defineEmits(['change']);

import MaestroSvg from '@/assets/icons/maestro.svg';
import MasterCardSvg from '@/assets/icons/mastercard.svg';
import VisaSvg from '@/assets/icons/visa.svg';

const onChange = (option: any) => {
  activeOption.value = option;
  emit('change', option);
}

</script>
<style>
.payment-item {
  @apply border border-[#878787] rounded-[4px] py-[6px] px-[10px] flex items-center justify-center;
}
</style>