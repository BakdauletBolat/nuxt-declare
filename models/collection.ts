import { JsonApi } from "~/models/models";



export interface ICollection extends JsonApi {
    attributes: {
        title: string;
        author: string;
        btn_text: string;
        small_description: string;
        description: string;
        created_at: Date;
        style: string;
    }
}

export interface ICollectionData {
    data: ICollection[];
}


