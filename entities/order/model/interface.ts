import { JsonApi } from "@/models/models";

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


export interface IOrderPosition extends JsonApi {}

export interface IStatus extends JsonApi {}

export interface IOrder extends JsonApi {
    attributes: {
        amount: number;
        created_at: Date;
        number: number;
        status: number;
    };
    positions: IOrderPosition[];
    statuses: IStatus[];
}