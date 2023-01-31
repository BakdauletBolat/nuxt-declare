<template>
  <div class="flex flex-col justify-center mt-[45px] items-center">
    <InputField @update:value="newValue=>first_name = newValue" :errorMessage="errors.first_name" placeholder="Имя*" :value="first_name" name="first_name"/>
    <InputField @update:value="newValue=>last_name = newValue" class="mt-[30px]" :errorMessage="errors.last_name" placeholder="Фамилия*" :value="last_name"
                name="last_name"/>
    <InputField :disabled="true" class="mt-[30px]" :isPhone="true" placeholder="Телефон*"
                :value="userStore.user?.attributes.phone" name="phone"/>
    <InputField :disabled="true" class="mt-[30px]" placeholder="Электронная почта*"
                :value="userStore.user?.attributes.email" name="email"/>
    <InputField @update:value="newValue=>birthday = newValue" type="date" class="mt-[30px]" :errorMessage="errors.birthday" placeholder="Дата*"
                :value="birthday ?? '2022.22.12'" name="birthday"/>
    <Button class="mt-[30px]">Сохранить</Button>
  </div>
</template>
<script lang="ts" setup>
import * as yup from "yup";
import {useForm} from "vee-validate";
import userStore from "~/stores/userStore";
import InputField from "~/components/ui/InputField.vue";
import Button from '@/components/ui/Button.vue';

const schema = yup.object({
  first_name: yup.string().required("Обязательная поля"),
  last_name: yup.string().required("Обязательная поля"),
  birthday: yup.date().required('Date')
});


const {errors, useFieldModel, handleSubmit} = useForm(
    {
      validationSchema: schema,
      initialValues: {
        first_name: userStore.user?.attributes.first_name,
        last_name: userStore.user?.attributes.last_name,
        birthday: userStore.user?.attributes.birthday
      }
    }
);

const [first_name, last_name, birthday] = useFieldModel(['first_name', 'last_name', 'birthday']);


</script>