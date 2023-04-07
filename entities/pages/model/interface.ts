import {JsonApi} from "~/models/models";

export interface IPage extends JsonApi {
    attributes: {
        slug: string;
        title: string
        content: string;
    }
}