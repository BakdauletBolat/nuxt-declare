import { ApiService } from "~/services/api-service";
import { IProduct, IProductData } from "~/models/product";



interface IProductSingleData {
    data: IProduct
}

class ProductService extends ApiService {

    async getProducts(filter: object) {
        return (await this.get<IProductData>('/products', filter, ['picture', 'pictures']));
    }

    async getProduct(id: string | string[]) {
        const data = (await this.get<IProductSingleData>(`/products/${id}`, {},
            ['pictures',
                "collections",
                "brand",
                "customer_type",
                "constituent",
                "color",
                "creator",
                "position",
                "cover",
                "videos",
                "size_group"])).data;
        return data;
    }

}


export default new ProductService();