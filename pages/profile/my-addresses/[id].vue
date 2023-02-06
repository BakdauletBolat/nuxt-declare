<template>
  <div>
    <PageTitleUi back-title="Адреса доставки" title="Изменить адрес"></PageTitleUi>
    <Form @submit="updateAddress" :validation-schema="addressCreateStore.schema">
      <AddressUpdateForm v-if="addressStore.address.data" :item="addressStore.address.data"></AddressUpdateForm>
      <Button class="mt-[32px]" :is-loading="isLoading" type="submit">Сохранить</Button>
    </Form>

  </div>
</template>
<script setup lang="ts">
import AddressUpdateForm from '@/entities/address/ui/update.vue';
import {useAddressCreateStore, useAddressStore} from '@/entities/address/model/store';
import Button from "~/components/ui/Button.vue";
import {notify} from "@kyvg/vue3-notification";
import {useRoute} from "vue-router";
import {Form} from 'vee-validate';

const addressCreateStore = useAddressCreateStore();
const addressStore = useAddressStore();
const isLoading = ref(false);
const route = useRoute();

onMounted(async () => {
  await addressStore.loadAddress(route.params.id);
})

const updateAddress = async (values:any) => {
  isLoading.value = true;
  try {
    const address = await addressCreateStore.update(values);
    navigateTo({
      name: 'profile-my-addresses'
    })
  } catch (e: any) {
    notify(e.toString());
  } finally {
    isLoading.value = false;
  }
}
</script>