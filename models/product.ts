import {JsonApi, IPicture} from "~/models/models";

export interface IProduct extends JsonApi {
    attributes: {
        title: string;
        description: string;
        article: string;
        weigh: string;
        sample: string
        brand: {
            id: number;
            name: string;
            slug: string;
        },
        price: number,
        old_price: number,
        sale: number
    };
    picture: {
        data: IPicture
    };
    pictures: {
        data: IPicture[]
    }
}

export interface IProductData {
    data: IProduct[];
}

