<template>
  <div class="flex flex-col gap-[28px]">
    <Select class="z-[100] w-full" name="city_id"
            :value="addressCreateStore.city_value"
            @change="newValue=>addressCreateStore.city_value=newValue"
            :options="addressCreateStore.citiesOptions"></Select>
    <TextInput name="street"
               :default-value="item.attributes.street"
               label="Улица*"></TextInput>
    <div class="flex gap-[40px]">
      <TextInput name="house"
                 :default-value="item.attributes.house"
                 label="Дом*"></TextInput>
      <TextInput name="apartment"
                 :default-value="item.attributes.apartment"
                 label="Квартира"></TextInput>
    </div>
  </div>
</template>
<script setup lang="ts">
import TextInput from "@/components/ui/inputs/text-input.vue";
import Select from "@/components/ui/Select.vue";
import {useAddressCreateStore} from '@/entities/address/model/store';
import {IAddress} from "~/entities/address/model/interface";


const props = defineProps<{
  item: IAddress
}>();

const addressCreateStore = useAddressCreateStore();

onMounted(async () => {
  await addressCreateStore.loadCities();
  addressCreateStore.city_value = {
    title: props.item.city!.data.attributes.name,
    id: props.item.city!.data.id
  };
});
</script>