import {ApiService} from "~~/services/api-service"

const apiService = new ApiService()

export const verifyUser = async (data: any) => {
    return await apiService.post<{
        access_token: string;
        refresh_token: string;
    }>('verify', data);
}