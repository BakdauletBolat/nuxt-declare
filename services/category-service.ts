import {ICategory, ICategoryData, ICategoryMenu} from "~/models/category";
import {ApiService} from "~/services/api-service";


export interface ICategoryMenuData {
    data: ICategoryMenu[];
}

class CategoryService extends ApiService {

    async getCategoriesMenu(id:number) {
        return await this.get<ICategoryMenuData>(`/category-menus/${id}/category`);
    }

    async getCategories() {
        return await this.get<ICategoryData>('/catalog/categories/parent', {}, ['children','picture','menus']);
    }

    async getCategory(id: string | string[]) {
        return await this.get<{
            data: ICategory
        }>(`/catalog/categories/${id}/view/`, {},['menus'])
    }

}


export default new CategoryService();