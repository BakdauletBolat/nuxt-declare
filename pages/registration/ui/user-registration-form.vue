<template>
  <div class="flex flex-col justify-center mt-[45px] items-center">
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.first_name : ''"
                placeholder="Имя*"
                :value="registrationStore.first_name"
                @update:value="newValue=>registrationStore.first_name=newValue"
                name="first_name"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.last_name : ''"
                placeholder="Фамилия*"
                :value="registrationStore.last_name"
                @update:value="newValue=>registrationStore.last_name=newValue"
                name="last_name"
                class="mt-[30px]"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.phone : ''"
                placeholder="Телефон*"
                @update:value="newValue=>registrationStore.phone=newValue"
                :value="registrationStore.phone" name="phone"
                class="mt-[30px]"
                :isPhone="true"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.email : ''"
                placeholder="Электронная почта*"
                @update:value="newValue=>registrationStore.email=newValue"
                :value="registrationStore.email"
                name="email"
                class="mt-[30px]"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.password : ''"
                placeholder="Пароль*"
                @update:value="newValue=>registrationStore.password=newValue"
                :value="registrationStore.password"
                name="password"
                type="password"
                class="mt-[30px]"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.confirm_password : ''"
                placeholder="Подтверждение пароля*"
                @update:value="newValue=>registrationStore.confirm_password=newValue"
                :value="registrationStore.confirm_password"
                name="confirm_password"
                type="password"
                class="mt-[30px]"/>
    <InputField :errorMessage="registrationStore.submitCount > 0 ? registrationStore.errors.birthday : ''"
                placeholder="Дата*"
                @update:value="newValue=>registrationStore.birthday=newValue"
                :value="registrationStore.birthday ?? '2022.22.12'"
                name="birthday"
                type="date"
                class="mt-[30px]"/>
    <Button :is-loading="registrationStore.isLoading" @click="submit" class="mt-[30px]">Войти</Button>
  </div>
</template>
<script lang="ts" setup>
import InputField from '@/components/ui/InputField.vue';
import Button from '@/components/ui/Button.vue';
import registrationStore from '../store';
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";


const router = useRouter();
const submit = async () => {
  const bool = await registrationStore.submit();
  const phone = phoneTrimmer(registrationStore.phone);
  if (bool == true) {
    console.log(bool, phone);
    try {
      await router.push({
        name: 'verify-id',
        params: {
          id: phone
        }
      })
      registrationStore.$reset();
    } catch (e) {
      console.log(e);
    }

  } else {
    notify({
      title: 'Введите правильные данные'
    })
  }
}

</script>