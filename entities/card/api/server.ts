import {ICard, ICardItem} from "../model/interface";
import {v4} from "uuid";
import {ApiService} from "~/services/api-service";

class CardAPIServer extends ApiService {

    async getCost() {
        const price: number = (await this.get<{
            data: {
                attributes: {
                    total: number
                }
            }
        }>('/user/carts/')).data.attributes.total;
        return price;
    }

    async getCard(page?: number): Promise<ICard> {
        const itemsData: ICardItem[] = (await this.get<{
            data: ICardItem[]
        }>('/user/carts/items', {
            page: page
        }, ['product'])).data;


        return {
            id: v4(),
            object: 'ICard',
            attributes: {
                items: itemsData
            }
        };
    }

    async addCardItem(itemProp: ICardItem): Promise<ICardItem> {
        const cardItem: ICardItem = (await this.post<{
            data: ICardItem
        }>('/user/carts?include=product', {
            product_id: itemProp.product.data.id,
            quantity: itemProp.attributes.quantity
        })).data;
        return cardItem;
    }


    async removeCardItem(id: number) {
        await this.delete('/user/carts/' + id.toString());
    }

    async changeQuantity(id: number, quantity: number) {
        return (await this.patch<{
            data: ICardItem
        }>('/user/carts/' + id.toString() + '/?include=product', {
            quantity: quantity
        })).data;
    }


    async multipleCreate(itemsData: {
        items: {
            product_id: number;
            quantity: number;
        }[]
    }) {
        return await this.post('/user/carts/items', itemsData);
    }

}

export default new CardAPIServer();