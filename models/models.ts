export interface JsonApi {
    id: number;
    object: string;
    attributes: object;
}

export interface IOptions {
    filter?: object;
    include?: string[];
}