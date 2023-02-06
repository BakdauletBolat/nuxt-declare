<template>
  <div>
    <div v-for="option in options"
         :key="option.id"
         @click="onChange(option)"
         class="flex gap-[12px] py-[16px] cursor-pointer border-b-[#F5F5F5] border-b last:border-b-0">
      <div
          class="shrink-0 delivery-select w-[19px] h-[19px] border border-[#27213D] rounded-[18px] flex items-center justify-center">
        <div
            v-if="option.id == activeOption"
            class="shrink-0 delivery-select-child w-[8.5px] h-[8.5px] bg-[#27213D] rounded-[8.4px]"></div>
      </div>
      <div class="flex w-full justify-between">
        <div class="flex flex-col">
          <div class="text-[16px] text-[#202020]">{{ option.title }}</div>
          <div class="text-[12px] text-[#525252] mt-[8px]">{{ option.description }}</div>
        </div>
        <div class="text-[16px] text-[#202020]">{{ option.trailing }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

const activeOption = ref(1);
const emit = defineEmits(['change']);

const onChange = (option: any) => {
  activeOption.value = option.id;
  emit('change', option);
}

const options = [
  {
    id: 1,
    title: 'Стандартная доставка',
    description: '1-3 рабочих дня (сервисом CDEK)',
    trailing: 'от 399 ₸'
  },
  // {
  //   id: 2,
  //   title: 'Самовывоз из магазина',
  //   description: 'В день оформления заказа',
  //   trailing: 'Бесплатно'
  // },
  {
    id: 3,
    title: 'Экспресс-доставка',
    description: 'На следующий рабочий день, если заказ оформлен до 14:00 (сервисом CDEK)',
    trailing: 'от 1500 ₸'
  }
]
</script>