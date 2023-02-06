import {JsonApi} from "~/models/models";
import {IPicture} from "~/models/banner";

export interface IPromotion extends JsonApi {
    attributes: {
        from: Date;
        until: Date;
        title: string;
        description: string;
        condition: string;
    }
    picture: {
        data: IPicture
    }
}