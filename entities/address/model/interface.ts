import {JsonApi} from "~/models/models";

export interface ICity extends JsonApi{
    attributes: {
        name: string;
    }
}

export interface IAddress extends JsonApi{
    attributes: {
        street: string;
        house: string;
        apartment: string;
    }
    city?: {
        data: ICity
    }
}