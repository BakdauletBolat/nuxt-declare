<template>
  <SafeArea>
    <main class="container mx-auto px-[15px] grid lg:grid-cols-2 gap-[20px]">
      <section class="mt-[24px] max-w-[500px] mx-auto">
        <h1 class="text-[21px] text-center">Вход</h1>
        <p class="mt-[20px] px-[16px] text-center">Если у вас есть учётная запись, пожалуйста, войдите</p>
        <Form @submit="login"
              :validation-schema="authStore.validation_schema"
              class="flex flex-col justify-center mt-[45px] items-center w-full mx-auto">
          <PhoneInput name="phone" label="Телефон*"></PhoneInput>
          <PasswordInput class="mt-[30px]" label="Пароль*" name="password"/>
          <Button type="submit" :is-loading="authStore.isLoading" class="mt-[30px] uppercase">ВОЙТИ</Button>
          <RouterLink :to="{
            name: 'forget-password'
          }" class="text-[#525252] mt-[20px] block">Забыли пароль ?</RouterLink>
        </Form>
      </section>
      <section class="mt-[36px] block max-w-[500px] mx-auto">
        <h1 class="text-[21px] text-center block">РЕГИСТРАЦИЯ</h1>
        <p class="mt-[20px] px-[16px] text-center block">Создайте свою учётную запись, и вы сможете
          экономить
          время
          при оформлении заказа, просматривать свою корзину и сохранённые товары с любого устройства
          и получите
          доступ к истории заказов</p>
        <Button @click="navigateToRegistration" class="mt-[40px]">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </section>
    </main>
  </SafeArea>
</template>
<script lang="ts" setup>
import authStore from './model/store';
import {navigateTo} from "#app";
import {notify} from "@kyvg/vue3-notification";
import Button from '@/components/ui/Button.vue';
import PhoneInput from "~/components/ui/inputs/phone-input.vue";
import PasswordInput from "~/components/ui/inputs/password-input.vue";
import {Form} from 'vee-validate';


const navigateToRegistration = () => {
  navigateTo('/registration')
}

const login = async (values: any) => {
  try {
    await authStore.signup(values);
  } catch (e: any) {
    notify({
      title: e.response.data.message
    })
  }
}

</script>
<style lang="scss">
.divider {
  height: 1px;
  background-color: #E0E0E0;
  width: 100%;
  margin: 36px 0;

  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 1px;
    margin: 0px 36px;
  }
}
</style>