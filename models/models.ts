export interface JsonApi {
    id: any;
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

export interface IMeta {
    pagination: {
        count: number;
        current_page: number;
        per_page: number;
        total: number;
        total_pages: number;
    }
}

