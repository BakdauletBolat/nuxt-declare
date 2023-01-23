import axios from 'axios';

export class ApiService {

    axiosAPI = axios.create({
            baseURL: 'https://clientauth-test.evrika.com/api/v1',
            timeout: 10000,
        }
    )

    constructor() {
        this.axiosAPI.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            if (token != undefined) {
                config.headers!.Authorization = 'Bearer ' + token;
            }
            return config;
        });
    }


    async get<T>(url: string, filter?: any, include?:string[]) {
        let filtered_url = '/?';

        if (include != undefined) {
            filtered_url += '&include=';
            for (let item in include) {
                filtered_url += `${include[item]},`
            }
        }
        if (filter != undefined) {
            for (let key in filter) {
                filtered_url += `${key}=${filter[key]}&`
            }
        }

        return (await this.axiosAPI.get<T>(url+filtered_url)).data
    }

    async post<T>(url: string, body: any) {
        return (await this.axiosAPI.post<T>(url, body)).data
    }

    async delete<T>(url: string) {
        return (await this.axiosAPI.delete<T>(url)).data
    }

    async patch<T>(url: string, data: any) {
        return (await this.axiosAPI.patch<T>(url, data = data)).data
    }
}


