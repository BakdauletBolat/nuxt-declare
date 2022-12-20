import {IBannerData} from "~/models/banner";
import {ApiService} from "~/services/api-service";


class BannerService extends ApiService{

    async getBanners() {
        return (await this.get<IBannerData>('/banners?include=picture')).data;
    }

}


export default new BannerService();