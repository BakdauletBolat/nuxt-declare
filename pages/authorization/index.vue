<template>
  <SafeArea>
    <GuestRedirect>
      <main class="container mx-auto px-[15px] grid lg:grid-cols-2 gap-[20px]">
        <section class="mt-[24px] max-w-[500px] mx-auto">
          <h1 class="text-[21px] text-center">Вход</h1>
          <p class="mt-[20px] px-[16px] text-center">Если у вас есть учётная запись, пожалуйста, войдите</p>
          <div class="flex flex-col justify-center mt-[45px] items-center w-full mx-auto">
            <InputField :isPhone="true" :errorMessage="authStore.errors.phone" placeholder="Телефон*"
                        :value="authStore.phone" @update:value="newValue => authStore.phone = newValue" name="phone"/>
            <InputField type="password" class="mt-[30px]" @update:value="newValue => authStore.password = newValue"
                        :errorMessage="authStore.errors.password"
                        placeholder="Пароль*" :value="authStore.password" name="password"/>
            <Button @click="authStore.signup" :is-loading="authStore.isLoading" class="mt-[30px] uppercase">ВОЙТИ
            </Button>
            <a href="#" class="text-[#525252] mt-[20px] block">Забыли пароль ?</a>
          </div>
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
    </GuestRedirect>
  </SafeArea>
</template>
<script lang="ts" setup>
import InputField from '@/components/UI/InputField.vue';
import Button from '@/components/UI/Button.vue';
import authStore from './model/store';
import {useRouter} from "vue-router";

const router = useRouter();
const navigateToRegistration = () => {
  router.push('/registration')
}


definePageMeta({
  middleware: 'guest'
});

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