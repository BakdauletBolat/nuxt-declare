import {defineStore} from "pinia";
import PageService from './service';
import { IPage } from "./interface";

const usePageStore = defineStore('page-store', () => {

    const page = ref<{
        data?: IPage
    }>({
        data: undefined
    });


    const loadPage = async (slug: string) => {
        page.value = await PageService.getPage(slug);
    }

    return {
        page,
        loadPage
    }
})

export default usePageStore();