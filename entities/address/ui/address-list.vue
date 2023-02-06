<template>
  <div>
    <div v-if="isLoading" class="grid gap-[20px]">
      <AddressSkeleton  v-for="item in Array.from([1,2,3])"></AddressSkeleton>
    </div>
    <AddressItem v-else v-for="item in items"
                 :item="item"
                 :key="item.id"></AddressItem>
  </div>
</template>
<script lang="ts" setup>
import {IAddress} from "~/entities/address/model/interface";
import AddressItem from '~/entities/address/ui/address-item.vue';
import Skeleton from "~/components/ui/Skeleton.vue";
import AddressSkeleton from "~/entities/address/ui/address-skeleton.vue";

defineProps<{
  items: IAddress[],
  isLoading: boolean
}>()

</script>