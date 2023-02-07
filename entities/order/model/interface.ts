export interface ICreateOrder {
    user_contact: {
        first_name: string;
        last_name: string;
        email:string;
        phone:string;
    };
    delivery_type: number;
    delivery_summa: number;
    user_address_id: number;
    comment: string;
}