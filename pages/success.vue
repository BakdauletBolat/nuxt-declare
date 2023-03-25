<template>
    <SafeArea>
        <div class="container mx-auto px-[15px]">
            <h2 class="text-[18px] text-center my-[24px]">БЛАГОДАРИМ ВАС ЗА ЗАКАЗ ЮВЕЛИРНЫХ ИЗДЕЛИЙ DECLARE!</h2>
            <p class="text-center text-[16px] my-[24px]">
                Номер вашего заказа AM-8465372
            </p>
            <p class="text-center text-[16px] my-[24px]">
                На электронную почту {{userStore.user?.attributes.email}} был отправлен чек и подробная информация о заказе
            </p>
            <p class="text-center text-[16px] my-[24px]">
                Вы можете посмототреть статус заказа в своём кабинете
            </p>
            <div class=""></div>
            <UiButton @click="()=>{
                navigateTo({
                    name: 'profile-my-orders'
                                })
            }" class="max-w-[376px] mx-auto mb-[20px]">МОИ ЗАКАЗЫ</UiButton>
            <UiButton @click="() => {
                navigateTo({
                    path: '/'
                })
            }" typeButton="bordered" class="max-w-[376px] mx-auto mb-[20px]">НА ГЛАВНУЮ</UiButton>
        </div>

    </SafeArea>
</template>
<script lang="ts" setup>
import userStore from '~~/stores/userStore';
</script>