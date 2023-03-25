import createOrderStore from "@/entities/order/model/store";
import { notify } from "@kyvg/vue3-notification";


export const validate_delivery_step = () => {
    if (!createOrderStore.user_address) {
        notify({
            title: "Выберите адрес доставки"
          });
        return false;
    }

    return true;
};