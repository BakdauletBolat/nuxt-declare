import * as yup from "yup";
import authService from "~/services/auth-service";
import {defineStore} from "pinia";

const useRegistrationStore = defineStore('registration-store', () => {


    const isLoading = ref<boolean>(false);

    const schema = yup.object().shape({
        first_name: yup.string().required("Обязательная поля"),
        last_name: yup.string().required("Обязательная поля"),
        phone: yup.string().required("Обязательная поля"),
        email: yup.string().required("Обязательная поля").email('Правильно введите почту'),
        password: yup.string().required("Обязательная поля"),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Не совпадает пароль'),
        birthday: yup.date().required('Date')
    });

    const submit = async (values: any) => {
        isLoading.value = true;
        try {
            await authService.registerUser(values);
        }
        catch (e:any) {
            throw e;
        }
        finally {
            isLoading.value = false;
        }

    };


    return {
        submit,
        isLoading,
        schema
    }
});

export default useRegistrationStore();
