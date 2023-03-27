import { defineStore } from "pinia";
import { IUser } from "~/models/user";
import service from '@/entities/order/service';
import { IAddress } from "~~/entities/address/model/interface";
import { IOrder } from "./interface";

export const useCreateOrderStore = defineStore('create-order-store', () => {
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
                email: user_contact.value!.attributes.email,
                phone: user_contact.value!.attributes.phone,
            },
            delivery_summa: delivery_summa.value,
            delivery_type: delivery_type.value,
            comment: comment.value,
            user_address_id: user_address.value!.id
        });
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

export const useOrderStore = defineStore('order-store', () => {

    const isLoadingOrders = ref<boolean>(false);
    const activeStatus = ref<string>('all');


    const changeStatus = (item: any) => {
        activeStatus.value = item.value;
        loadOrders();
    }

    const statuses = [
        {
            label: 'Все',
            value: 'all'
        },
        {
            label: 'АКТИВНЫЕ',
            value: 'active'
        },
        {
            label: 'ВЫПОЛНЕНЫ',
            value: 'done'
        },
        {
            label: 'ОТМЕНЕНЫ',
            value: 'cancel'
        }
    ]


    const orders = ref<{
        data: IOrder[]
    }>({
        data: []
    });


    const loadOrders = async (filter: object = {}) => {
        isLoadingOrders.value = true;
        try {
            const response = await service.getOrders(Object.assign(filter, {
                status: activeStatus.value
            }));
            orders.value = response;
        }
        finally {
            isLoadingOrders.value = false;
        }
    }


    return {
        isLoadingOrders,
        orders,
        statuses,
        activeStatus,
        loadOrders,
        changeStatus
    }



});


