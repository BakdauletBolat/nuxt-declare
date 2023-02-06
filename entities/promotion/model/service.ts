import {ApiService} from "~/services/api-service";
import {IPromotion} from "~/entities/promotion/model/interface";

class PromotionService extends ApiService {

    async getPromotion(id: number) {
        return await this.get<{
            data: IPromotion
        }>(`/sales/${id}/`, {}, ['picture']);
    }

    async getPromotionsList(page: number = 1) {
        return await this.get<{
            data: IPromotion[]
        }>('/sales/', {
            page: page
        }, ['picture'])
    }
}

export default new PromotionService();