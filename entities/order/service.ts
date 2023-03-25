import {ApiService} from "~/services/api-service";
import {ICreateOrder} from "~/entities/order/model/interface";

class OrderService extends ApiService {
    async createOrder(data: ICreateOrder) {
        return await this.post<{
            data: {
                link: string
            }
        }>('/order', data);
    }

    async getOrders() {
        return await this.get('/orders', {}, ['statuses']);
    }
}

export default new OrderService();