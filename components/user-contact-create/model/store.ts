import {defineStore} from "pinia";
import {IUser} from "~/models/user";

const useUserContactCreateStore = defineStore('user-contact-create', () => {
    const userContact = ref<IUser | undefined>(undefined);

    const setUserContact = (user:any) => {
            userContact.value = user;
    }
    return {
        setUserContact,
        userContact
    }
});

export default useUserContactCreateStore();