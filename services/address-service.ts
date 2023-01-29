import {ApiService} from "@/services/api-service";
import {IAddress, ICity} from "@/entities/address/model/interface";


class AddressService extends ApiService {

    async createAddress(data: any) {
        return await this.post<{
            data: IAddress
        }>('/user/address/', data);
    }

    async getCities() {
        return await this.get<{
            data: ICity[]
        }>('/cities/');
    }

}


export default new AddressService();