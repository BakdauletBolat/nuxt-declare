import {defineStore} from "pinia";
import {ICollection} from "~/models/collection";
import {IProduct} from "~/models/product";
import CollectionService from "~/services/collection-service";
import ProductService from "~/services/product-service";

const useCollectionStore = defineStore('collection-store', () => {

    const collection = ref<ICollection | null>(null);
    const collections = ref<{
        data: ICollection[]
    }>({
        data: []
    });
    const collectionProducts = ref<IProduct[]>([]);
    const isLoadingCollectionProducts = ref<boolean>(false);
    const isLoadingCollections = ref<boolean>(false);

    const collection_chunked = computed(() => {
        const result = []
        for (let i = 0; i < collections.value.data.length; i += 7)
            result.push(collections.value.data.slice(i, i + 7))
        return result
    })
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


    const loadCollections = async () => {
        isLoadingCollections.value = true;
        try {
            const data = await CollectionService.getCollections();
            collections.value = data;
        } catch (e) {
            console.log(e);
        } finally {
            isLoadingCollections.value = false;
        }
    }


    return {
        loadCollection,
        loadCollections,
        collection,
        collections,
        collection_chunked,
        collectionProducts,
        isLoadingCollectionProducts
    }

});

export default useCollectionStore();