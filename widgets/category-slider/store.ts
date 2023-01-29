import {defineStore} from "pinia";
import {ICategory} from "~/models/category";
import CategoryService from "~/services/category-service";

const useCategoryStore = defineStore('category-store', ()=> {
    const categories = ref<ICategory[]>();

    const loadCategories = async () => {
        const data = await CategoryService.getCategories();
        categories.value = data.data;
    }
    return {
        categories,
        loadCategories
    }
})

export default useCategoryStore();