import {defineStore} from "pinia";
import * as yup from "yup";
import {phoneTrimmer} from "~/utils/phoneTrimmer";
import authService from "~/services/auth-service";
import userStore from "~/stores/userStore";
import cardStore from '@/entities/card/model/store';
import {notify} from "@kyvg/vue3-notification";
import {useField, useForm} from 'vee-validate';
import {authUserAndNavigateProfile} from "~/entities/user/service/authUser";

const useAuthStore = defineStore('auth-store', () => {
    const isLoading = ref<boolean>(false);

    const validation_schema = yup.object().shape({
        phone: yup.string().required("Обязательная поля"),
        password: yup.string().required('Обязательная поля').min(8, 'Пароль должен из 8 ит символов')
    })


    const signup = async (values: any) => {
        isLoading.value = true;
        try {
            values['phone'] = phoneTrimmer(values['phone']);
            const data = await authService.login(values);
            await authUserAndNavigateProfile(data);
        } catch (e: any) {
            throw e;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        isLoading,
        validation_schema,
        signup,
    }

});

export default useAuthStore();