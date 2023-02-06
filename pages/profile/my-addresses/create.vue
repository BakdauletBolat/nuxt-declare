<template>
  <div>
    <PageTitleUi back-title="Адреса доставки" title="Добавить адрес"></PageTitleUi>
    <Form @submit="createAddress"

          @invalid-submit="onInvalidSubmit"
          :validation-schema="addressCreateStore.schema">
      <AddressCreateForm></AddressCreateForm>
      <Button class="mt-[32px]" :is-loading="isLoading" type="submit">Создать</Button>
    </Form>
  </div>
</template>
<script setup lang="ts">
import AddressCreateForm from '@/entities/address/ui/create.vue';
import {useAddressCreateStore, useAddressStore} from '@/entities/address/model/store';
import Button from "~/components/ui/Button.vue";
import {notify} from "@kyvg/vue3-notification";
import {Form} from 'vee-validate';
import {useRoute} from "vue-router";


const addressCreateStore = useAddressCreateStore();
const addressStore = useAddressStore();
const isLoading = ref(false);

const onInvalidSubmit = (invalid: any, as: any) => {
  console.log('INVALID', invalid, as);

}

const route = useRoute();

onMounted(() => {
  console.log(route.params);
})

const navigateToBack = () => {
  if (route.query.backUrl) {
    navigateTo({
      name: route.query.backUrl.toString()
    });
  } else {
    navigateTo({
      name: 'profile-my-addresses'
    })
  }
}

const createAddress = async (values: any) => {
  isLoading.value = true;
  try {
    const address = await addressCreateStore.submit(values);
    console.log(values);
    if (address != undefined) {
      addressStore.addresses_list.data.push(address!.data);
    }
    navigateToBack();
  } catch (e: any) {
    console.log(e);
    notify({
      title: e.toString()
    });
  } finally {
    isLoading.value = false;
  }
}
</script>