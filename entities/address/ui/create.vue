<template>
  <div class="flex flex-col gap-[28px]">
    <Select class="z-[100] w-full" @change="newValue=>city_value = newValue" :value="city_value"
            :options="addressCreateStore.citiesOptions"></Select>
    <InputField placeholder="Улица*"></InputField>
    <div class="flex gap-[40px]">
      <InputField placeholder="Дом*"></InputField>
      <InputField placeholder="Квартира"></InputField>
    </div>

  </div>
</template>
<script setup lang="ts">
import InputField from "~/components/ui/InputField.vue";
import Select from "~/components/ui/Select.vue";
import {useAddressCreateStore} from '@/entities/address/model/store';

const addressCreateStore = useAddressCreateStore();

const city_value = ref<{
  title: string;
  id: number;
}>({
  id: 1,
  title: 'Selected'
});

watch(city_value, () => {
  addressCreateStore.city_id = city_value.value.id;
});

onMounted(() => {
  addressCreateStore.loadCities();
});
</script>