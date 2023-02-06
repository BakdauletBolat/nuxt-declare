<template>
  <div class="" v-if="user">
    <div class="flex flex-col gap-[16px]">
      <div class="text-[16px] text-[#525252]">{{ user.attributes.first_name }} {{ user.attributes.last_name }}</div>
      <div class="text-[16px] text-[#525252]">{{ user.attributes.phone }}</div>
      <div class="text-[16px] text-[#525252] flex justify-between items-center">
        <div class="text-[16px] text-[#525252]">{{ user.attributes.email }}</div>
        <NuxtLink :to="{
          name: 'create-order'
        }" class="text-[16px] py-[5px] border-b border-b-[#E4ABC7]">Редактировать</NuxtLink>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {IUser} from "~/models/user";

defineProps<{
  user: IUser
}>();
</script>