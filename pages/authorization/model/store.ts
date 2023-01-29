import {defineStore} from "pinia";
import * as yup from "yup";
import {phoneTrimmer} from "~/utils/phoneTrimmer";
import authService from "~/services/auth-service";
import userStore from "~/stores/userStore";
import cardStore from '@/entities/card/model/store';
import {notify} from "@kyvg/vue3-notification";
import {useRouter} from "vue-router";
import {useForm} from 'vee-validate';

const useAuthStore = defineStore('auth-store', () => {

    const router = useRouter();

    const schema = yup.object({
        phone: yup.string().required("Обязательная поля"),
        password: yup.string().required('Обязательная поля').min(8, 'Пароль должен из 8 ит символов'),
    });

    const {errors, useFieldModel, handleSubmit} = useForm({
        validationSchema: schema,
    });

    const isLoading = ref<boolean>(false);

    const [phone, password] = useFieldModel(['phone', 'password']);

    const signup = handleSubmit(async (values: any) => {
        isLoading.value = true;
        try {
            values.phone = phoneTrimmer(values.phone);
            const data = await authService.login(values);
            authService.saveTokenToLocalStorage(data.access_token, data.refresh_token);
            await userStore.loadUser();
            await cardStore.loadCard();


        } catch (e) {
            console.log(e);
            notify({
                title: "Пароль или логин не правильный"
            });
        } finally {
            isLoading.value = false;
        }
    });

    return {
        isLoading,
        errors,
        phone,
        password,
        signup,
    }

});

export default useAuthStore();