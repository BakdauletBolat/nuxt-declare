import {IBannerData} from "~/models/banner";
import {ApiService} from "~/services/api-service";
import {IOptions} from "~/models/models";

class BannerService extends ApiService{

    async getBanners({filter, include}:IOptions) {
        return await this.get<IBannerData>('/banners',filter, include);
    }

}


export default new BannerService();