<template>
    <Form autocomplete="off" class="flex flex-col justify-center mt-[45px] items-center" @submit="submit"
        :validation-schema="schema" v-slot="{errors, values}">
        <InputField :errorMessage="errors.first_name" placeholder="Имя*" :value="values.first_name" name="first_name" />
        <InputField class="mt-[30px]" :errorMessage="errors.last_name" placeholder="Фамилия*" :value="values.last_name"
            name="last_name" />
        <InputField class="mt-[30px]" :isPhone="true" :errorMessage="errors.phone" placeholder="Телефон*"
            :value="values.phone" name="phone" />
        <InputField class="mt-[30px]" :errorMessage="errors.email" placeholder="Электронная почта*"
            :value="values.email" name="email" />
        <InputField type="password" class="mt-[30px]" :errorMessage="errors.password" placeholder="Пароль*"
            :value="values.password" name="password" />
        <InputField type="password" class="mt-[30px]" :errorMessage="errors.confirm_password"
            placeholder="Подверждение пароля*" :value="values.confirm_password" name="confirm_password" />
        <InputField type="date" class="mt-[30px]" :errorMessage="errors.birthday" placeholder="Дата*"
            :value="values.birthday ?? '2022.22.12'" name="birthday" />
        <Button class="mt-[30px]">Войти</Button>
    </Form>
</template>
<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import InputField from '@/components/UI/InputField.vue';
import Button from '@/components/UI/Button.vue';
import { notify } from "@kyvg/vue3-notification";
import authService from '~~/services/auth-service';


const router = useRouter();

const submit = async (values: any) => {

    values['phone'] = phoneTrimmer(values['phone']);
    values['gender'] = 'male';

    try {
        await authService.registerUser(values);
        router.push({
            name: 'verify-id',
            params: {
                id: values['phone']
            }
        })
    }
    catch (e) {
        console.log(e);
        notify({
            title: "Что то пошло не так"
        });
    }
}

const schema = yup.object({
    first_name: yup.string().required("Обязательная поля"),
    last_name: yup.string().required("Обязательная поля"),
    phone: yup.string().required("Обязательная поля"),
    email: yup.string().required("Обязательная поля").email('Правильно введите почту'),
    password: yup.string().required("Обязательная поля"),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Не совпадает пароль'),
    birthday: yup.date().required('Date')
});


</script>