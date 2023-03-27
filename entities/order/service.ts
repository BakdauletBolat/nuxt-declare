import {ApiService} from "~/services/api-service";
import {ICreateOrder, IOrder} from "@/entities/order/model/interface";

class OrderService extends ApiService {
    async createOrder(data: ICreateOrder) {
        return await this.post<{
            data: {
                link: string
            }
        }>('/order', data);
    }

    async getOrders(filter:object) {
        return await this.get<{
            data: IOrder[]
        }>('/orders', filter, ['statuses','positions']);
    }
}

export default new OrderService();