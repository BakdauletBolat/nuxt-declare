import {JsonApi, IPicture} from "~/models/models";
import {ICollection} from '@/models/collection';

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
    collections: {
        data: ICollection[]
    }
    picture: {
        data: IPicture
    };
    pictures: {
        data: IPicture[]
    };
    cover: {
        data: ICover
    };
    color: {
        data: IColor
    };
    customer_type: {
        data: ICustomerType
    };
    constituent: {
        data: IConstituent
    };
    creator: {
        data: ICreator
    };
    position: {
        data: IPosition
    };
    size_group: {
        data: ISizeGroup[]
    }

}

export interface IMeta {
    pagination: {
        total: number,
        count: number,
        total_pages: number,
    }
}

export interface IProductData {
    data: IProduct[];
    meta: IMeta
}

export interface IColor extends JsonApi {
    attributes: {
        name: string;
    }
}


export interface ICustomerType extends JsonApi {
    attributes: {
        name: string;
    }
}


export interface IConstituent extends JsonApi {
    attributes: {
        name: string;
    }
}

export interface ICreator extends JsonApi {
    attributes: {
        name: string;
    }
}

export interface IPosition extends JsonApi {
    attributes: {
        name: string;
    }
}


export interface ICover extends JsonApi {
    attributes: {
        name: string;
    }
}

export interface ISizeGroup extends JsonApi {
    attributes: {
        product_id: number;
        size: string;
    }
}



