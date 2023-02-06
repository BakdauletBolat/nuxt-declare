<template>
  <div>
    <div v-if="isLoading" class="grid gap-[20px]">
      <AddressSkeleton v-for="item in Array.from([1,2,3])"></AddressSkeleton>
    </div>
    <div class="cursor-pointer flex gap-[10px] items-center" @click="onChange(item)" v-else v-for="item in items">
      <div
          class="shrink-0 delivery-select w-[19px] h-[19px] border border-[#27213D] rounded-[18px] flex items-center justify-center">
        <div
            v-if="item.id == activeOption"
            class="shrink-0 delivery-select-child w-[8.5px] h-[8.5px] bg-[#27213D] rounded-[8.4px]"></div>
      </div>
      <AddressItem
          :isEdit="false"
          :item="item"
          :key="item.id"></AddressItem>
    </div>

  </div>
</template>
<script lang="ts" setup>
import {IAddress} from "~/entities/address/model/interface";
import AddressItem from '~/entities/address/ui/address-item.vue';
import AddressSkeleton from "~/entities/address/ui/address-skeleton.vue";

const activeOption = ref(1);
const emit = defineEmits(['change']);

const onChange = (option: any) => {
  activeOption.value = option.id;
  emit('change', option);
}

defineProps<{
  items: IAddress[],
  isLoading: boolean
}>()

</script>