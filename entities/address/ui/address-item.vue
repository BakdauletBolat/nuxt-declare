<template>
  <div class="flex flex-col lg:flex-row gap-[16px] items-start justify-between address-item" v-if="item">
      <div>г. {{item?.city?.data.attributes.name}}, ул. {{item?.attributes.street}} д. {{item.attributes.house}} {{item.attributes.apartment}}</div>
      <NuxtLink :to="{
          name: 'profile-my-addresses-id',
          params: {
            id: item.id
          }
      }" class="border-b self-end border-b-[#E4ABC7] pb-[4px] inline-block" v-if="isEdit">Редактировать</NuxtLink>
  </div>

</template>
<script lang="ts" setup>
import {IAddress} from "~/entities/address/model/interface";
defineProps<{
  item: IAddress,
  isEdit: boolean
}>()
</script>
<style lang="scss">
  .address-item {
    @apply border-b border-b-[#E0E0E0] py-[20px];

    &:last-child {
      @apply border-b-0;
    }
  }
</style>