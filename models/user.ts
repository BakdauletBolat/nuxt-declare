import { JsonApi } from "./models";

export interface IUser extends JsonApi {
    attributes: {
        first_name: string
        last_name: string
        phone: string
        email: string
        birthday: Date
        gender: number
    }
}

export interface IUserData {
    data: IUser
}