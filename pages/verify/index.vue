<template>
    <SafeArea>
        <div class="container px-[15px] mx-auto max-w-[500px]">
            <h1 class="mt-[24px] text-[21px] text-center">Верификация</h1>
            <p class="mt-[20px] px-[16px] text-center">Благодарим вас за регистрацию!Необходимо подтвердить свою учётную
                запись, вам на почту email@gmail.com было отправлено письмо с ссылкой для подтверждения</p>
            <div class="mt-[20px]">
                <div class="flex gap-[10px] justify-center" ref="otpCont">
                    <input @keydown="handleKeyDown($event, index)" v-for="(el, index) in digits" v-model="digits[index]"
                        :key="index" class="digit-box" type="text" maxlength="1" />
                </div>
                <Button class="mt-[30px]">Отправить</Button>
            </div>
        </div>

    </SafeArea>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Button from '@/components/UI/Button.vue';

const digits = ref<number[] | null[]>([null, null, null, null]);
const otpCont = ref<any>(null);


const handleKeyDown = function (event: any, index: number) {

    if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        event.preventDefault();
    }

    if (event.key === "Backspace") {
        digits.value[index] = null;
        if (index != 0) {
            (otpCont.value.children)[index - 1].focus();
        }
        else {
            (otpCont.value.children)[index].blur();
        }
    }

    if ((new RegExp('^([0-9])$')).test(event.key)) {
        digits.value[index] = event.key;
        if (index != 3) {
            (otpCont.value.children)[index + 1].focus();
        }
        else {
            (otpCont.value.children)[index].blur();
        }
    }
}

</script>
<style lang="scss">
.digit-box {
    width: 100%;
    text-align: center;
    width: 50px;
    height: 50px;
    border-bottom: 1px solid #878787;

}

.digit-box:focus {
    outline: 1px solid #27213D;
    border-radius: 5px;
}
</style>