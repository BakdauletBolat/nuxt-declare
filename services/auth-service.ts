import { IBannerData } from "~/models/banner";
import { ApiService } from "~/services/api-service";


class AuthService extends ApiService {

    async getBanners() {
        return (await this.get<IBannerData>('/banners?include=picture')).data;
    }

    async login(data: any) {
        return await this.get('/login');
    }

    

    saveTokenToLocalStorage(access:string, refresh:string) {
        localStorage.setItem('token', access);
        localStorage.setItem('refresh', refresh);
    }

    removeTokenFromLocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
    }

    async registerUser(userData: any) {
        return await this.post<any>('/register', userData);
    }

    async verifyUser(data:any) {
        try {
            await this.post<{}>('/verify', data);
        }
        catch (e) {
            console.log(e);
        }
        
    }

}


export default new AuthService();