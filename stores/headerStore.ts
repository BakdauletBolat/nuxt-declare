import {defineStore} from "pinia";
import {ref, watch} from 'vue';
import CategoryService from "~/services/category-service";
import {ICategory, ICategoryMenu} from "~/models/category";
import lodash from 'lodash';

const defaultOffset = 550;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

export const useHeaderStore = defineStore('header', () => {
    const hide = ref(false);
    const isHide = ref(false);
    const isOpenBurger = ref(false);

    const isLoadingCategoriesMenu = ref(false);

    const categories = ref<any>([]);
    const currentStep = ref<number>(0);
    const categoriesMenu = ref<{ [key: string]: ICategoryMenu[] } | undefined>(undefined);
    const activeCategory = ref<ICategory | undefined>(undefined);

    // const categoriesMenu = computed(() => );

    const loadCategories = async ({}: any) => {
        categories.value[0] = (await CategoryService.getCategories()).data;
    }

    const loadCategoriesMenu = async () => {
        isLoadingCategoriesMenu.value = true;
        const menu_list: ICategoryMenu[] = (await CategoryService.getCategoriesMenu(activeCategory.value!.id)).data;
        categoriesMenu.value = lodash.groupBy(menu_list, (menu: ICategoryMenu) => {
            return menu.attributes.type;
        });
        console.log(menu_list, activeCategory.value!.id);
        isLoadingCategoriesMenu.value = false;
    }


    const nextPage = async (nextPage: number, nextPageChildren: ICategory[], activeCategoryData: ICategory) => {
        categories.value[nextPage] = nextPageChildren;
        activeCategory.value = activeCategoryData;
        currentStep.value = nextPage;
        await loadCategoriesMenu();
    }

    const onBack = () => {
        currentStep.value -= 1;
    }

    const changeIsOpenBurger = (value: boolean) => {
        isOpenBurger.value = value;
    }

    const useScrollActive = () => {
        if (scrollPosition() > lastScroll && !hide.value && scrollPosition() > defaultOffset) {
            hide.value = true;
        } else if (scrollPosition() < lastScroll && hide.value) {
            hide.value = false;
        }
        lastScroll = scrollPosition();
    }

    return {
        hide, isHide, isOpenBurger, categories, currentStep, activeCategory,
        categoriesMenu,
        isLoadingCategoriesMenu,
        loadCategoriesMenu,
        onBack, nextPage,
        changeIsOpenBurger, useScrollActive, loadCategories
    }
})
