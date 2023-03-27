<template>
  <div class="grid gap-[28px]">
    <div>
      <div class="text-[18px] uppercase mb-[28px]">1. Контактная информация</div>
      <user-contact :user="createOrderStore.user_contact"></user-contact>
    </div>
    <div>
      <div class="text-[18px] uppercase lg:mb-[28px] mb-[28px]">2. ДЕТАЛИ ДОСТАВКИ</div>
      <p>Стандартная доставка: до 25 июля 2022</p>
      <address-item class="!py-[5px]" :is-edit="false" :item="createOrderStore.user_address"></address-item>
    </div>
    <div>
      <div class="text-[18px] uppercase lg:mb-[28px] mb-[28px]">3. ОПЛАТА</div>
      <PaymentSelect></PaymentSelect>
    </div>
  </div>

</template>
<script lang="ts" setup>
import {useCreateOrderStore} from '@/entities/order/model/store';
import UserContact from '@/entities/user/ui/contact.vue';
import AddressItem from "~/entities/address/ui/address-item.vue";
import PaymentSelect from "~/components/ui/payment-select.vue";

const createOrderStore = useCreateOrderStore();
</script>