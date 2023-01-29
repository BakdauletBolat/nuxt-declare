import {ApiService} from "~/services/api-service";
import {IOptions} from "~/models/models";
import {ICollectionData, ICollection} from "~~/models/collection";

class CollectionService extends ApiService {

    async getRandomCollections({filter, include}: IOptions) {
        return await this.get<ICollectionData>('/catalog/collections', filter, include);
    }

    async getCollection({id}: {
        id: string | string[]
    }) {
        return await this.get<{
            data: ICollection
        }>(`/catalog/collections/${id}`)
    }

    async getLastCollection({filter, include}: IOptions) {
        return await this.get<{
            data: ICollection
        }>('/catalog/collections/get/last', filter, include);
    }

}


export default new CollectionService();