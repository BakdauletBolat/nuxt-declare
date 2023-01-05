import axios from 'axios';

export class ApiService {

    axiosAPI = axios.create({
            baseURL: 'https://erzh.kz/api/v1',
            timeout: 4000,
        }
    )

    constructor() {

        this.axiosAPI.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            if (token != undefined) {
                config.headers!.Authorization = 'Bearer ' + token;
            } else {
                config.headers!.Authorization = 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTAuMTAuMS45MDo4MS9hcGkvdjEvbG9naW4iLCJpYXQiOjE2NzE0Mzk1ODQsImV4cCI6MTY3NjYyMzU4NCwibmJmIjoxNjcxNDM5NTg0LCJqdGkiOiJmOElydG5TNFpOV25hUUJ5Iiwic3ViIjoiMyIsInBydiI6IjA0MzM5ZmQ2MzE1ZjU1MjEyMzlhN2FkMDNmYTI1YWFhNzU1ZDQ3MDYiLCJpZCI6MywiZW1haWwiOiJiYWtvc2gyMTM0NUBnbWFpbC5jb20ifQ.bpZAy5i5uWb6zPnZUkKr81rfgrPpE-l6Yj7-SYPmHyk'
            }
            return config;
        });
    }


    async get<T>(url: string, filter?: object, include?:string[]) {
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