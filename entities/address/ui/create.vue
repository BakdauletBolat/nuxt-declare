<template>
  <div class="flex flex-col gap-[28px]">
    <Select  class="z-[100] w-full" name="city_id"
            :value="addressCreateStore.city_value"
            @change="newValue=>addressCreateStore.city_value=newValue"
            :options="addressCreateStore.citiesOptions"></Select>
    <TextInput name="street"
               label="Улица*"></TextInput>
    <div class="flex gap-[40px]">
      <TextInput name="house"
                 label="Дом*"></TextInput>
      <TextInput name="apartment"
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
  item?: IAddress
}>();

const addressCreateStore = useAddressCreateStore();


onMounted(async () => {
  await addressCreateStore.loadCities();
  addressCreateStore.city_value.value = {
    title: addressCreateStore.cities[0].attributes.name,
    id: addressCreateStore.cities[0].id
  };
});
</script>