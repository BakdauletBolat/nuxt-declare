import {ApiService} from "~/services/api-service";
import {IProduct, IProductData} from "~/models/product";




class ProductService extends ApiService{

    async getProducts(filter:object) {
        return (await this.get<IProductData>('/products', filter));
    }

}


export default new ProductService();