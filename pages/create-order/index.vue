<template>
  <div>
    <UserContact :user="userStore.user"></UserContact>
    <div class="border-b border-b-[#E0E0E0] my-[28px]"></div>
    <div class="text-[18px] uppercase">ДЕТАЛИ ДОСТАВКИ</div>
    <div class="text-[18px] uppercase">АДРЕС ДОСТАВКИ</div>
    <CreateAddress></CreateAddress>
  </div>
</template>
<script setup lang="ts">
import CreateAddress from '@/entities/address/ui/create.vue';
import UserContact from '@/entities/user/ui/contact.vue';
import userStore from "~/stores/userStore";
</script>