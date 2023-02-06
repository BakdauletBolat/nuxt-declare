<template>
  <Form :validation-schema="registrationStore.schema"
        @submit="register"
        class="flex flex-col justify-center mt-[45px] items-center">
    <TextInput label="Имя*"
               name="first_name"
    />
    <TextInput
        label="Фамилия*"
        name="last_name"
        class="mt-[30px]"/>
    <PhoneInput
        label="Телефон*"
        name="phone"
        class="mt-[30px]"/>
    <TextInput label="Электронная почта*"
               name="email"
               class="mt-[30px]"/>
    <PasswordInput
        label="Пароль*"
        name="password"
        class="mt-[30px]"/>
    <PasswordInput
        label="Подтверждение пароля*"
        name="confirm_password"
        class="mt-[30px]"/>
    <DateInput
        label="Дата*"
        name="birthday"
        class="mt-[30px]"/>
    <Button :is-loading="registrationStore.isLoading" type="submit" class="mt-[30px]">Войти</Button>
  </Form>
</template>
<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import registrationStore from '../store';
import TextInput from "~/components/ui/inputs/text-input.vue";
import PasswordInput from "~/components/ui/inputs/password-input.vue";
import PhoneInput from "~/components/ui/inputs/phone-input.vue";
import DateInput from "~/components/ui/inputs/date-input.vue";
import {Form} from "vee-validate";
import {notify} from "@kyvg/vue3-notification";


const register = async (values: any) => {
  values['phone'] = phoneTrimmer(values['phone']);
  values['gender'] = 'male'

  try {
    await registrationStore.submit(values);
    navigateTo({
      name: 'verify-id',
      params: {
        id: values['phone']
      }
    })
  } catch (e: any) {
    notify({
      title: e.response.data.message
    })
  }


}

</script>