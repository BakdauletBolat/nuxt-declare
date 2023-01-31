import { defineStore } from "pinia";
import { IUser } from "@/models/user";
import authService from "@/services/auth-service";
import cardStore from '@/entities/card/model/store';


const useUserStore = defineStore('user-store', () => {
    const user = ref<IUser | null>(null);
    const isLoadingUser = ref<boolean>(false);


    const loadUser = async () => {
        isLoadingUser.value = true;
        try {
            user.value = (await authService.getUser()).data;
        } finally {
            isLoadingUser.value = false;
        }
    }

    const logoutUser = async () => {
        user.value = null;
        authService.removeTokenFromLocalStorage();
        await cardStore.loadCard();

    }

    return {
        user,
        isLoadingUser,
        loadUser,
        logoutUser
    }

});

export default useUserStore();