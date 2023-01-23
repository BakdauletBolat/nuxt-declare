import { defineStore } from "pinia";
import { IUser } from "@/models/user";
import authService from "@/services/auth-service";

const useUserStore = defineStore('user-store', () => {
    const user = ref<IUser | null>(null);
    const isLoadingUser = ref<boolean>(false);

    const loadUser = async () => {
        isLoadingUser.value = true;
        try {
            user.value = (await authService.getUser()).data;
        }
        finally {
            isLoadingUser.value = false;
        }

    }

    return {
        user,
        isLoadingUser,
        loadUser,
    }

});

export default useUserStore();