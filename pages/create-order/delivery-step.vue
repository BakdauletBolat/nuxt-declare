<template>
  <div class="grid gap-[28px]">
    <div>
      <div class="text-[18px] uppercase mb-[28px]">1. Контактная информация</div>
      <user-contact :user="createUserContactStore.userContact"></user-contact>
    </div>
    <div>
      <div class="text-[18px] uppercase mb-[28px]">2. Детали доставки</div>
      <DeliverySelect @change="changeDelivery"></DeliverySelect>
    </div>
    <div>
      <div class="text-[18px] uppercase mb-[28px]">Адрес доставки</div>
      <AddressSelect :is-loading="false" v-if="addressStore.addresses_list.data" :items="addressStore.addresses_list.data"></AddressSelect>

      <Button @click="()=>{
        navigateTo({
        name: 'profile-my-addresses-create',
        query: {
            backUrl: 'create-order-delivery-step'
          }
        })
      }" class="mt-[20px]" typeButton="bordered">Добавить
      </Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import UserContact from '@/entities/user/ui/contact.vue';
import createUserContactStore from '@/components/user-contact-create/model/store';
import DeliverySelect from '@/components/ui/delivery-select/ui.vue';
import AddressSelect from "~/entities/address/ui/address-select.vue";
import {useAddressStore} from "~/entities/address/model/store";
import Button from "~/components/ui/Button.vue";

const addressStore = useAddressStore();
onMounted(() => {
  addressStore.loadAddresses();
})
const changeDelivery = () => {

}
</script>