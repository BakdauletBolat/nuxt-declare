<template>
  <div class="" v-if="user">
    <div class="text-[18px] uppercase mb-[28px]">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>
    <div class="flex flex-col gap-[16px]">
      <div class="text-[16px] text-[#525252]">{{ user.attributes.first_name }} {{ user.attributes.last_name }}</div>
      <div class="text-[16px] text-[#525252]">{{ user.attributes.phone }}</div>
      <div class="text-[16px] text-[#525252]">
        <div class="text-[16px] text-[#525252]">{{ user.attributes.email }}</div>
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