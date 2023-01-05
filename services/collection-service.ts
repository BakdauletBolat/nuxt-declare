import {ApiService} from "~/services/api-service";
import {IOptions} from "~/models/models";
import { ICollectionData } from "~~/models/collection";

class CollectionService extends ApiService{

    async getRandomCollections({filter, include}:IOptions) {
        return await this.get<ICollectionData>('/catalog/collections',filter, include);
    }

}


export default new CollectionService();