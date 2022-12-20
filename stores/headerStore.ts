import {defineStore} from "pinia";
import {ref} from 'vue';
import CategoryService from "~/services/category-service";
import {ICategoryMenu} from "~/models/category";
import {ICategoryMenuData} from '@/services/category-service';

const headerHeight = 100;
const defaultOffset = 550;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

interface IMobileMenuItem {
    id: number,
    title: string,
    parent_id?: number;
    children?: IMobileMenuItem[]
}


const menu_list = [
    {
        id: 1,
        title: 'Ювелирные изделия',
        children: [
            {
                id: 5,
                title: 'Все изделия'
            }
        ]
    },
    {
        id: 2,
        title: 'Свадьба',
        children: [
            {
                id: 5,
                title: 'Все изделия'
            }
        ]
    },
    {
        id: 3,
        title: 'Подарки',
        children: [
            {
                id: 5,
                title: 'Все изделия'
            }
        ]
    },
    {
        id: 4,
        title: 'Серебро',
        children: [
            {
                id: 5,
                title: 'Все изделия'
            }
        ]
    }
]


export const useHeaderStore = defineStore('header', () => {
    const hide = ref(false);
    const isHide = ref(false);
    const isOpenBurger = ref(false);
    const categoriesMenu = ref<ICategoryMenu[]>([]);
    const menuList = ref<IMobileMenuItem[]>(menu_list);

    const activeCategoryMenu = ref<IMobileMenuItem>();

    const loadICategoriesMenu = async () => {
        const items: ICategoryMenuData = await CategoryService.getCategoryMenuItems();
        categoriesMenu.value = items.data;
    }

    const changeActiveCategoryMenu = () => {

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

    return {hide, isHide, isOpenBurger, activeCategoryMenu,
            menuList,
            changeIsOpenBurger, useScrollActive}
})
