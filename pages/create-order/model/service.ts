import {useCreateOrderStore} from "@/entities/order/model/store";
import { notify } from "@kyvg/vue3-notification";

const createOrderStore = useCreateOrderStore();

export const validate_delivery_step = () => {
    if (!createOrderStore.user_address) {
        notify({
            title: "Выберите адрес доставки"
          });
        return false;
    }

    return true;
};