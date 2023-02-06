import {defineStore} from "pinia";
import {INews} from "~/entities/news/model/interface";
import NewsService from './service';

const useNewsStore = defineStore('news-store', () => {
    const newsList = ref<{
        data: INews[]
    }>({
        data: []
    });
    const news = ref<{
        data?: INews
    }>({
        data: undefined
    });

    const loadNewsList = async (page: number = 1) => {
        newsList.value = await NewsService.getNewsList(page);
    }
    const loadNews = async (id: number) => {
        news.value = await NewsService.getNews(id);
    }

    return {
        news,
        newsList,
        loadNews,
        loadNewsList
    }
})

export default useNewsStore();