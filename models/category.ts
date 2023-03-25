import {IPicture, JsonApi} from "~/models/models";

export interface ICategoryMenu extends JsonApi {
    attributes: {
        type: string;
        name: string;
        entity: string;
        entity_id: number;
        category_id: number;
    }
    is_select?: boolean
}

export interface ICategory extends JsonApi {
    attributes: {
        name: string;
        slug: string;
    }
    picture: {
        data: IPicture
    }
    children: {
        data: ICategory[]
    }
    menus: {
        data: ICategoryMenu[]
    }
}

export interface ICategoryData {
    data: ICategory[];
}


export interface ICategoryMenuGrouped extends JsonApi {
    attributes: {
        type: string;
        children: {}
    }
}
