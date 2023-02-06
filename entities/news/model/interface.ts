import {JsonApi} from "~/models/models";
import {IPicture} from "~/models/banner";

export interface INews extends JsonApi {
    attributes: {
        title: string;
        small_description: string
        description: string;
    }
    picture: {
        data: IPicture
    }
}