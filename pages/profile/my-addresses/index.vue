<template>
  <div>
    <Breadcrumb class="lg:hidden" back-title="Назад"></Breadcrumb>
    <div class=" mx-auto px-[15px]">
      <PageTitleUi title="Адреса доставки"></PageTitleUi>
      <p v-if="addressStore.addresses_list.data <= 0" class="text-[16px] text-center">У вас нет сохранённых адресов</p>
      <AddressList :is-loading="isLoading" v-else :items="addressStore.addresses_list.data"></AddressList>
      <Button  @click="navigateToCreate" class="mt-[48px] max-w-[375px] mx-auto" type-button="bordered">Добавить адрес</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import Button from "~/components/ui/Button.vue";
import {useAddressStore} from "~/entities/address/model/store";
import AddressList from "~/entities/address/ui/address-list.vue";

const isLoading = ref(false);
const addressStore = useAddressStore();

onMounted(async () => {
  isLoading.value = true;
  try {
      await addressStore.loadAddresses();
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }

})

const navigateToCreate = () => {
  navigateTo({
    name: 'profile-my-addresses-create'
  })
}
</script>