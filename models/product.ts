import {JsonApi} from "~/models/models";

export interface IProduct extends JsonApi {
    attributes: {
        title: string;
        description: string;
        article: string;
        weigh: string;
        sample: string
        "brand": {
            id: number;
            name: string;
            slug: string;
        },
        price: number,
        old_price: number,
        sale: number
    }
}

export interface IProductData {
    data: IProduct[];
}

