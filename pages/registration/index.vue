<template>
    <SafeArea>
        <GuestRedirect>
            <Breadcrump></Breadcrump>
            <main class="container mx-auto px-[15px] max-w-[500px]">
                <h1 class="mt-[24px] text-[21px] text-center">Регистрация</h1>
                <p class="mt-[20px] px-[16px] text-center">Создайте свою учётную запись, и вы сможете экономить время
                    при оформлении заказа, просматривать свою корзину и сохранённые товары с любого устройства
                    и получите
                    доступ к истории заказов</p>
                <UserRegistrationForm></UserRegistrationForm>
            </main>
        </GuestRedirect>
    </SafeArea>
</template>
<script lang="ts" setup>
import UserRegistrationForm from '@/pages/registration/ui/user-registration-form.vue';
import Breadcrump from './ui/breadcrump.vue';

definePageMeta({
    middleware: 'guest'
})
</script>