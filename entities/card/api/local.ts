import {ICardItem, ICard} from "../model/interface";
import {v4} from "uuid";

class CardAPILocal {

    card_key = 'card'

    getCard(): ICard {
        const _card = localStorage.getItem(this.card_key);
        if (_card === null) localStorage.setItem(this.card_key, JSON.stringify({
            id: v4(),
            object: 'Card',
            attributes: {
                items: []
            }
        }));
        const card: ICard = JSON.parse(localStorage.getItem(this.card_key)!);
        return card;
    }

    getCost(): number {
        const card: ICard = JSON.parse(localStorage.getItem(this.card_key)!);
        let price = 0
        let old_price = 0
        card.attributes.items.forEach((item) => {
            price += item.product.data.attributes.price * item.attributes.quantity;
            old_price += item.product.data.attributes.old_price * item.attributes.quantity;
        });
        return price;
    }

    addCardItem(itemProp: ICardItem): ICardItem | null {

        const card: ICard = this.getCard();


        const indexIsHave = card.attributes.items.findIndex(item => item.attributes.product_id == itemProp.attributes.product_id);
        if (indexIsHave === -1) {
            card.attributes.items.push(itemProp);
            localStorage.setItem(this.card_key, JSON.stringify(card));
            return itemProp;
        } else {
            const itemEdit: ICardItem = card.attributes.items[indexIsHave];
            itemEdit.attributes.quantity += 1;
            card.attributes.items[indexIsHave] = itemEdit;
            localStorage.setItem(this.card_key, JSON.stringify(card));
            return itemEdit;
        }
    }


    removeCardItem(id: number) {
        const card: ICard = this.getCard();
        const indexIsHave = card.attributes.items.findIndex(item => item.id == id);
        if (indexIsHave == -1) return;
        card.attributes.items.splice(id, 1);
        localStorage.setItem(this.card_key, JSON.stringify(card));
    }

    changeQuantity(id: number, quantity: number): ICardItem | undefined {
        const card: ICard = this.getCard();
        const indexIsHave = card.attributes.items.findIndex(item => item.id == id);
        if (indexIsHave == -1) return;
        card.attributes.items[indexIsHave].attributes.quantity = quantity;
        localStorage.setItem(this.card_key, JSON.stringify(card));
        return card.attributes.items[indexIsHave];
    }

    clearStorage() {
        localStorage.removeItem('card');
    }
}

export default new CardAPILocal();