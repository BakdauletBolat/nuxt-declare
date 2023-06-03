import { JsonApi } from "@/models/models";
import { IProduct } from "~~/models/product";

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


export interface IOrderPosition extends JsonApi {
    product: {
        data: IProduct
    }
}

export interface IStatus {
    alias: string;
    author_id:number;
    code: number;
    comment: string;
    id: number;
    name: string;
    order_id: number;
}

export interface IOrder extends JsonApi {
    attributes: {
        amount: number;
        created_at: Date;
        number: number;
        status: number;
    };
    positions: {
        data: IOrderPosition[]
    };
    statuses: {
        data: IStatus[]
    };
}