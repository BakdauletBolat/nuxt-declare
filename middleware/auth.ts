import { ApiService } from "~~/services/api-service";
import userStore from "~~/stores/userStore"
import AuthService from '@/services/auth-service';

export default defineNuxtRouteMiddleware(async (to, from) => {


    const user = await AuthService.getUser();
    
    // if (!token.value) () => navigateTo('/login');
})