import * as yup from "yup";
import {useForm} from "vee-validate";
import authService from "~/services/auth-service";
import {defineStore} from "pinia";

const useRegistrationStore = defineStore('registration-store', () => {

    const isLoading = ref<boolean>(false);

    const schema = yup.object({
        first_name: yup.string().required("Обязательная поля"),
        last_name: yup.string().required("Обязательная поля"),
        phone: yup.string().required("Обязательная поля"),
        email: yup.string().required("Обязательная поля").email('Правильно введите почту'),
        password: yup.string().required("Обязательная поля"),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Не совпадает пароль'),
        birthday: yup.date().required('Date')
    });

    const {useFieldModel, errors, handleSubmit, submitCount} = useForm(
        {
            validationSchema: schema
        }
    );

    const submit = handleSubmit(async (values: any) => {
        isLoading.value = true;
        values['phone'] = phoneTrimmer(values['phone']);
        values['gender'] = 'male';
        try {
            await authService.registerUser(values);
            return true;
        } catch (e) {
            return false;
        }
        finally {
            isLoading.value = false
        }
    });

    const [first_name, last_name, phone, email, password, confirm_password, birthday] = useFieldModel(['first_name', 'last_name', 'phone', 'email', 'password', 'confirm_password', 'birthday'])

    return {
        submitCount,
        errors,
        submit,
        first_name,
        last_name,
        phone,
        isLoading,
        email,
        password,
        confirm_password,
        birthday
    }
});

export default useRegistrationStore();
