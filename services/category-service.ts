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
        return await this.get<ICategoryData>('/catalog/categories/parent', {}, ['children']);
    }

    async getCategory(id: number) {
        return await this.get<{
            data: ICategory
        }>(`/catalog/categories/${id}/find`, {}, ['children'])
    }

}


export default new CategoryService();