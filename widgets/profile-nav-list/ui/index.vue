<template>
  <ul class="flex flex-col w-full gap-[24px]">
    <NavListItem v-for="item in itemsToRender" :key="item.title" :title="item.title" :to="item.to"></NavListItem>
    <div @click="logoutUser" class="uppercase text-[16px] cursor-pointer">
      Выйти
    </div>
  </ul>
</template>
<script setup lang="ts">
import NavListItem from "./nav-list-item.vue";
import userStore from "~/stores/userStore";
import {navigateTo} from "#app";


const props = defineProps<{
  items?: INavListItem[]
}>();

const logoutUser = async () => {
  try {
    await userStore.logoutUser();
    await navigateTo({
      name: 'authorization'
    });
  } catch (e) {
    console.log(e);
  }
}


const itemsToRender: INavListItem[] = props.items ? props.items : [
  {
    title: 'Личная информация',
    to: {
      name: 'profile-user-information'
    }
  },
  {
    title: 'Мой заказы',
    to: {
      name: 'profile-my-orders'
    }
  },
  {
    title: 'АДРЕСА ДОСТАВКИ',
    to: {
      name: 'profile-my-addresses'
    }
  },
  {
    title: 'СМЕНА ПАРОЛЯ',
    to: {
      name: 'profile-change-password'
    }
  },
  {
    title: 'НОВОСТНАЯ РАССЫЛКА',
    to: {
      name: 'profile-push-news'
    }
  }
];

interface INavListItem {
  title: string;
  to: any
}


</script>