import {ApiService} from "~/services/api-service";
import {INews} from "~/entities/news/model/interface";

class NewsService extends ApiService {

    async getNews(id: number) {
        return await this.get<{
            data: INews
        }>(`/news/${id}/`,{}, ['picture']);
    }
    async getNewsList(page:number = 1) {
        return await this.get<{
            data: INews[]
        }>('/news/',{
            page: page,
        },['picture'])
    }
}

export default new NewsService();