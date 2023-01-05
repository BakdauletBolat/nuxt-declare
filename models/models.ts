export interface JsonApi {
    id: number;
    object: string;
    attributes: object;
}

export interface IOptions {
    filter?: object;
    include?: string[];
}

export interface IPicture extends JsonApi {
    attributes: {
        uuid: string;
        url: string;
        type: string;
        format: string;
    }
}

