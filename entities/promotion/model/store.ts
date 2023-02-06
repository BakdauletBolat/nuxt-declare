import {defineStore} from "pinia";
import {IPromotion} from "~/entities/promotion/model/interface";
import PromotionService from './service';

const usePromotionStore = defineStore('promotion-store', () => {
    const promotionsList = ref<{
        data: IPromotion[]
    }>({
        data: []
    });
    const promotion = ref<{
        data?: IPromotion
    }>({
        data: undefined
    });

    const loadPromotionsList = async (page: number = 1) => {
        promotionsList.value = await PromotionService.getPromotionsList(page);
    }
    const loadPromotion = async (id: number) => {
        promotion.value = await PromotionService.getPromotion(id);
    }

    return {
        promotion,
        promotionsList,
        loadPromotion,
        loadPromotionsList
    }
})

export default usePromotionStore();