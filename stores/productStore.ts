import { defineStore } from "pinia";
import productService from "~/services/product-service";
import { IMeta, IProduct } from "~~/models/product";
import { ref, computed } from 'vue';
import { ICollection } from "~~/models/collection";
import collectionService from "~~/services/collection-service";
import categoryService from "~~/services/category-service";
import { ICategoryMenu } from "~~/models/category";
import lodash from "lodash";
import { useRoute, useRouter } from "vue-router";

export const useProductStore = defineStore('product-store', () => {

    const productsData = ref<{
        data: (ICollection | IProduct)[],
        meta?:IMeta
    }>({
        data: []
    });
    const page = ref<number>(1);
    const isLoadingProducts = ref<boolean>(true);
    const isLoadingMore = ref<boolean>(false);
    const isLastPage = ref<boolean>(false);
    const filters = ref<{ [key: string]: ICategoryMenu[] } | undefined>(undefined);

    const router = useRouter();
    const route = useRoute();
    
    const selectedFilter = computed(()=>{
       const keys = Object.keys(filters.value!);
       const filtersData: any[] = []
        keys.forEach(key=>{
            filters.value![key].forEach(item=>{
                if (item.is_select == true) {
                    const index: number = filtersData.findIndex((itemIndex,index)=>itemIndex[index] == item.attributes.entity);
               
                    if (index == -1) {
                        filtersData.push({ 
                            [item.attributes.entity]: item.attributes.entity_id.toString()
                        });
                    } 
                    else {
                        filtersData[index][item.attributes.entity] += `, ${item.attributes.entity_id.toString()}`;
                        
                    }
                    
                    console.log(filtersData);
                    
                }
            })
        });


        router.replace(
            {
                query: Object.assign({ }, ...filtersData)
            }
        )
        return filtersData;
    })

    const setActiveFilterItem = (id: number, key: string | number) => {
        const index:number = filters.value![key].findIndex(item=>item.id == id);
        if (index !== -1) {
            filters.value![key][index].is_select = !filters.value![key][index].is_select;
        }
    }   

    const loadFilters = async (id:number) => {
        const menu_list: ICategoryMenu[] = (await categoryService.getCategoriesMenu(id)).data;
        filters.value = lodash.groupBy(menu_list, (menu: ICategoryMenu) => {
            return menu.attributes.type;
        });
    }
    

    const getRandomPlace = () => {
        for (let index = 4; index < productsData.value.data.length; index += 5) {
            if (productsData.value.data[index].object === 'Product') {
                return index;
            }
        }
        return -1;
    }

    const incrementPage = () => {
        page.value += 1;
    }


    const insertCollections = async () => {
        const collections: ICollection[] = (await collectionService.getRandomCollections({})).data;
        collections.map(collection => {
            const index: number = getRandomPlace();
            if (index != -1) {
                productsData.value.data.splice(index, 0, collection);
            }
        });

    }

    const loadProducts = async (page: number = 1, filter:object) => {
        isLoadingProducts.value = true;
        productsData.value = (await productService.getProducts({
            page: page,
            ...filter
        }, ));
        insertCollections();
        isLastPage.value = false;
        isLoadingProducts.value = false;
    }

    const loadMoreProducts = async (page:number = 1) => {
        isLoadingMore.value = true;
        const productsNew: IProduct[] = (await productService.getProducts({
            page: page
        })).data;

        if (productsNew.length <= 0) {
            isLastPage.value = true;
            isLoadingMore.value = false;
            return;
        }
        productsData.value.data.push(...productsNew);
        insertCollections();
        isLoadingMore.value = false;
    }


    return {
        isLoadingMore,
        isLoadingProducts,
        isLastPage,
        productsData,
        page,
        filters,
        loadFilters,
        incrementPage,
        loadProducts,
        setActiveFilterItem,
        selectedFilter,
        loadMoreProducts,
    }

});