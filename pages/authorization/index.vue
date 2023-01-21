<template>
    <SafeArea>
        <main class="container mx-auto px-[15px] grid lg:grid-cols-2 gap-[20px]">
            <section class="mt-[24px] max-w-[500px] mx-auto">
                <h1 class="text-[21px] text-center">Вход</h1>
                <p class="mt-[20px] px-[16px] text-center">Если у вас есть учётная запись, пожалуйста, войдите</p>
                <Form autocomplete="off" class="flex flex-col justify-center mt-[45px] items-center w-full mx-auto"
                    @submit="submit" :validation-schema="schema" v-slot="{errors, values}">
                    <InputField :isPhone="true" :errorMessage="errors.phone" placeholder="Телефон*"
                        :value="values.phone" name="phone" />
                    <InputField type="password" class="mt-[30px]" :errorMessage="errors.password" placeholder="Пароль*"
                        :value="values.password" name="password" />
                    <Button class="mt-[30px]">ВОЙТИ</Button>
                    <a href="#" class="text-[#525252] mt-[20px] block">Забыли пароль ?</a>
                </Form>

            </section>

            <section class="mt-[36px] block max-w-[500px] mx-auto">
                <h1 class="text-[21px] text-center block">РЕГИСТРАЦИЯ</h1>
                <p class="mt-[20px] px-[16px] text-center block">Создайте свою учётную запись, и вы сможете экономить
                    время
                    при оформлении заказа, просматривать свою корзину и сохранённые товары с любого устройства
                    и получите
                    доступ к истории заказов</p>
                <Button @click="router.push('/registration')" class="mt-[40px]">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
            </section>
        </main>
    </SafeArea>
</template>
<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import InputField from '@/components/UI/InputField.vue';
import Button from '@/components/UI/Button.vue';
import { useRouter } from 'vue-router';
import {phoneTrimmer} from '@/utils/phoneTrimmer';

const router = useRouter();

const schema = yup.object({
    phone: yup.string().required("Обязательная поля"),
    password: yup.string().required('Обязательная поля').min(8, 'Пароль должен из 8 ит символов'),
});


const submit = (values: any) => {
    values.phone = phoneTrimmer(values.phone);
    console.log('hello', values);
}

</script>
<style lang="scss">
.divider {
    height: 1px;
    background-color: #E0E0E0;
    width: 100%;
    margin: 36px 0px;

    @media screen and (min-width:1024px) {
        height: 100%;
        width: 1px;
        margin: 0px 36px;
    }
}
</style>