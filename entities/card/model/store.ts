import {defineStore} from "pinia";
import {ICard, ICardItem} from "./interface";
import userStore from '@/stores/userStore';
import CardApiLocal from '../api/local';
import CardApiServer from '../api/server';

const useCardStore = defineStore('card-store', () => {

    const apiService = computed<typeof CardApiLocal | typeof CardApiServer>(() => {
        if (userStore.user === null) {
            return CardApiLocal;
        }
        return CardApiServer;
    })

    const card = ref<ICard | undefined>(undefined);

    const isOpenModal = ref<boolean>(false);


    const openModal = () => {
        isOpenModal.value = true
    };
    const closeModal = () => isOpenModal.value = false;



    const loadCard = async () => {
        const data = await apiService.value?.getCard();
        card.value = data;
        const price = await apiService.value.getCost();
        card.value.attributes.price = price;

    }

    const loadMoreCard = async (page: number) => {

        const data = await apiService.value?.getCard(page);
        if (data.attributes.items.length == 0) {
            return true;
        }
        card.value?.attributes.items.push(...data.attributes.items);
        return false;
    }

    const changeQuantity = async (id: number, value: string) => {
        if (value == '' || value == undefined) return;
        try {
            const cardItem: ICardItem | undefined = await apiService.value?.changeQuantity(id, parseInt(value));
            const index = card.value?.attributes.items.findIndex(item => cardItem?.id == item.id);
            if (index != -1 && index != undefined) {
                card.value!.attributes.items[index] = cardItem!;
            }
            card.value!.attributes.price = await apiService.value.getCost();
        } catch (e) {
            console.log(e);
        }

    }

    const addCardItem = async (itemProp: ICardItem) => {
        try {
            const cardItem: ICardItem | null = await apiService.value?.addCardItem(itemProp);
            card.value?.attributes.items.push(cardItem!);
            card.value!.attributes.price = await apiService.value.getCost();
        } catch (e) {
            console.log(e);
        }

    }

    const removeCardItem = async (id: number) => {
        try {
            apiService.value?.removeCardItem(id);
            const index = card.value?.attributes.items.findIndex(item => item.id == id);
            if (index != -1 && index != undefined) {
                card.value!.attributes.items.splice(index, 1);
            }
            card.value!.attributes.price = await apiService.value.getCost();
        } catch (e) {
            console.log(e);
        }

    }

    return {
        card,
        isOpenModal,
        loadMoreCard,
        addCardItem,
        removeCardItem,
        closeModal,
        openModal,
        loadCard,
        changeQuantity
    }

});

export default useCardStore();