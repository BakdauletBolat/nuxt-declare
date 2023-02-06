<template>
  <div>
    <PageTitle title="Смена пароля"></PageTitle>
    <form @submit.prevent="submit" class="flex flex-col gap-[30px]">
      <InputField type="password"
                  name="current_password"
                  placeholder="Пароль*"
                  :error-message="errors.current_password"
                  @update:value="newValue=>current_password=newValue"
                  :value="current_password"
      ></InputField>
      <InputField type="password"
                  :error-message="errors.new_password"
                  placeholder="Новый пароль*"
                  name="new_password"
                  @update:value="newValue=>new_password=newValue"
                  :value="new_password"></InputField>
      <p>Пароль должен содержать не менее 8 символов, включая заглавную букву, цифры и специальный символ($, #, @,!, %,
        ^, &, *, -, _)</p>
      <Button>
        Сохранить
      </Button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import PageTitle from '@/components/page-title/ui.vue';
import InputField from "~/components/ui/InputField.vue";
import Button from "~/components/ui/Button.vue";
import * as yup from "yup";
import {useForm} from "vee-validate";

const schema = yup.object({
  current_password: yup.string().required("Обязательная поля"),
  new_password: yup.string().required("Обязательная поля"),
});


const {errors, handleSubmit, useFieldModel} = useForm(
    {
      validateOnMount: false,
      validationSchema: schema
    }
);

const [new_password, current_password] = useFieldModel(['new_password', 'current_password'])



const submit = handleSubmit(() => {
  console.log('ok')
});


</script>