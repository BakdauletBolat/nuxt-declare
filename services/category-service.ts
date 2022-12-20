import {ICategoryMenu} from "~/models/category";
import {ApiService} from "~/services/api-service";


export interface ICategoryMenuData {
    data: ICategoryMenu[];
}

class CategoryService extends ApiService{

    async getCategoryMenuItems() {
        return (await this.get<ICategoryMenuData>('/category-menus/1/category')).data;
    }

}


export default new CategoryService();