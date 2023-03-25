import {defineStore} from "pinia";
import {IUser} from "~/models/user";
import service from '@/entities/order/service';
import { IAddress } from "~~/entities/address/model/interface";

const useCreateOrderStore = defineStore('create-order-store', () => {
    const delivery_type = ref(2);
    const delivery_summa = ref(2000);
    const user_address = ref<IAddress | undefined>(undefined);
    const user_contact = ref<IUser | undefined>(undefined);
    const comment = ref("");

    const createOrder = async () => {
        const res = await service.createOrder({
            user_contact: {
                first_name: user_contact.value!.attributes.first_name,
                last_name: user_contact.value!.attributes.last_name,
                email:user_contact.value!.attributes.email,
                phone: user_contact.value!.attributes.phone,
            },
            delivery_summa: delivery_summa.value,
            delivery_type: delivery_type.value,
            comment: comment.value,
            user_address_id: user_address.value!.id
        });
        console.log(res);
        return res.data;
    }

    return {
        delivery_type,
        delivery_summa,
        user_address,
        user_contact,
        comment,
        createOrder
    }
});

export default useCreateOrderStore();