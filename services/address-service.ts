import {ApiService} from "@/services/api-service";
import {IAddress, ICity} from "@/entities/address/model/interface";


class AddressService extends ApiService {

    async createAddress(data: any) {
        return await this.post<{
            data: IAddress
        }>('/user/address/', data);
    }

    async updateAddress(data:any,id: string | string[]) {
        return await this.patch<{
            data: IAddress
        }>('/user/address/'+id.toString(), data);
    }

    async getAddresses() {
        return await this.get<{
            data: IAddress[]
        }>('/user/address/');
    }

    async getAddress(id: string | string[]) {
        return await this.get<{
            data: IAddress
        }>('/user/address/'+id.toString());
    }


    async getCities() {
        return await this.get<{
            data: ICity[]
        }>('/cities/');
    }

}


export default new AddressService();