import { JsonApi } from "~~/models/models";
import { IProduct } from "~~/models/product";

export interface ICardItem extends JsonApi {
    attributes: {
        product_id: number;
        quantity: number;
        product?: IProduct;
    }
    product: {
        data: IProduct
    }
}

export interface ICard extends JsonApi {
    attributes: {
        price?: number;
        old_price?: number;
        items: ICardItem[]
    }
}