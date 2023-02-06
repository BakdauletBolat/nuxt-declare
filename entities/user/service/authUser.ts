import authService from "~/services/auth-service";
import userStore from "~/stores/userStore";
import cardStore from '@/entities/card/model/store';
import cardServiceLocal from '@/entities/card/api/local';
import cardServiceServer from '@/entities/card/api/server';
import {ICard} from "~/entities/card/model/interface";


const mapperCardItemFromLocalStorage = () => {
    const card: ICard = cardServiceLocal.getCard();

    const items: {
        product_id: number;
        quantity: number;
    }[] = card.attributes.items.map((item) => {
        return {
            product_id: item.attributes.product_id,
            quantity: item.attributes.quantity
        }
    });


    return items;
}

export const authUserAndNavigateProfile = async (data: {
    access_token: string;
    refresh_token: string;
}) => {
    authService.saveTokenToLocalStorage(data!.access_token, data!.refresh_token);
    const itemsList = mapperCardItemFromLocalStorage();
    await userStore.loadUser();
    if (userStore.user != null) {
        if (itemsList.length > 0) {
            await cardServiceServer.multipleCreate({
                items: itemsList
            });
        }
        cardServiceLocal.clearStorage();
        await cardStore.loadCard();
        navigateTo({
            name: 'profile'
        })
    }
}