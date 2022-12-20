import {IBannerData} from "~/models/banner";
import {ApiService} from "~/services/api-service";


class AuthService extends ApiService{

    async getBanners() {
        return (await this.get<IBannerData>('/banners?include=picture')).data;
    }

}


export default new AuthService();