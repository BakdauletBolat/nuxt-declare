import { ICardItem, ICard } from "../model/interface";
import { v4 } from "uuid";
class CardAPILocal {

    card_key = 'card'

    getCard(): ICard {
        const _card = localStorage.getItem(this.card_key);
        if (_card === null) localStorage.setItem(this.card_key, JSON.stringify({
            id: v4(),
            object: 'Card',
            items: []
        }));
        const card: ICard = JSON.parse(localStorage.getItem(this.card_key)!);
        return card;
    }

    addCardItem(itemProp: ICardItem): ICardItem | null {

        const card: ICard = this.getCard();

        const indexIsHave = card.items.findIndex(item => item.attributes.product_id == itemProp.attributes.product_id);
        if (indexIsHave === -1) {
            card.items.push(itemProp);
            localStorage.setItem(this.card_key, JSON.stringify(card));
            return itemProp;
        }
        else {
            const itemEdit: ICardItem = card.items[indexIsHave];
            itemEdit.attributes.quantity += 1;
            card.items[indexIsHave] = itemEdit;
            localStorage.setItem(this.card_key, JSON.stringify(card));
            return itemEdit;
        }
    }



    removeCardItem(id: number) {
        const card: ICard = this.getCard();
        const indexIsHave = card.items.findIndex(item => item.id == id);
        if (indexIsHave == -1) return;
        card.items.splice(id, 1);
        localStorage.setItem(this.card_key, JSON.stringify(card.items));
    }

    changeQuantity(id: number, quantity: number) {
        const card: ICard = this.getCard();
        const indexIsHave = card.items.findIndex(item => item.id == id);
        if (indexIsHave == -1) return;
        card.items[indexIsHave].attributes.quantity = quantity;
        localStorage.setItem(this.card_key, JSON.stringify(card.items));
    }
}

export default new CardAPILocal();