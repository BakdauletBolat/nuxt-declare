import {JsonApi} from "~/models/models";


export interface IBannerData extends JsonApi {
    data: IBanner[]
}


export interface IBanner extends JsonApi {
    attributes: {
        sort: number;
        title: string;
        description: string;
    }
    picture: {
        data: IPicture;
    }
}


export interface IPicture extends JsonApi {
    attributes: {
        uuid: string;
        url: string;
    }
}
