import {defineStore} from "pinia";
import {IUser} from "~/models/user";

const useCreateOrderStore = defineStore('create-order-store', () => {
    const delivery_type = ref(2);
    const delivery_summa = ref(2000);
    const user_address = ref(null);
    const user_contact = ref<IUser | undefined>(undefined);
    const comment = ref("");

    const createOrder = () => {

    }

    return {
        delivery_type,
        delivery_summa,
        user_address,
        user_contact,
        comment
    }
});

export default useCreateOrderStore();