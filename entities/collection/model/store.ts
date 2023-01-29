import {defineStore} from "pinia";
import {ICollection} from "~/models/collection";
import {IProduct} from "~/models/product";
import CollectionService from "~/services/collection-service";
import ProductService from "~/services/product-service";

const useCollectionStore = defineStore('collection-store', () => {

    const collection = ref<ICollection | null>(null);

    const collectionProducts = ref<IProduct[]>([]);
    const isLoadingCollectionProducts = ref<boolean>(false);
    const loadCollection = async (id: string | string[]) => {
        isLoadingCollectionProducts.value = true;
        try {
            const data = await CollectionService.getCollection({
                id: id
            });

            collection.value = data.data;

            const products = await ProductService.getProducts({
                collection_id: id
            })

            collectionProducts.value = products.data;
        } catch (e) {
            console.log(e);
        } finally {
            isLoadingCollectionProducts.value = false;
        }
    }

    return {
        loadCollection,
        collection,
        collectionProducts,
        isLoadingCollectionProducts
    }

});

export default useCollectionStore();