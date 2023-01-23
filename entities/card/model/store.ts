import { defineStore } from "pinia";
import { ICard, ICardItem } from "./interface";
import userStore from '@/stores/userStore';
import CardApiLocal from '../api/local';
const useCardStore = defineStore('card-store', ()=>{

    const apiService = computed(()=>{
        if (userStore.user === null) {
            return CardApiLocal;
        }
        return;
    })

    const card = ref<ICard | undefined>(undefined);

    const isOpenModal = ref<boolean>(false);


    const openModal = () => { isOpenModal.value = true };
    const closeModal = () => isOpenModal.value = false;

    const loadCard = () => {
        card.value = apiService.value?.getCard();
    }

    const changeQuantity = (id:number, value: string) => {
        apiService.value?.changeQuantity(id,parseInt(value));
    }

    const addCardItem =  async (itemProp: ICardItem) => {
        apiService.value?.addCardItem(itemProp);
        loadCard(); 
    }

    const removeCardItem =  async (id: number) => {
        apiService.value?.removeCardItem(id);
        loadCard(); 
    }

    return {
        card,
        addCardItem,
        removeCardItem,
        isOpenModal,
        closeModal,
        openModal,
        loadCard,
        changeQuantity
    }

});

export default useCardStore();