import {JsonApi} from "~/models/models";

export interface ICategoryMenu extends JsonApi {
    attributes: {
        type: string;
        name: string;
    }
}


export interface ICategoryMenuGrouped extends JsonApi {
    attributes: {
        type: string;
        children: {

        }
    }
}
