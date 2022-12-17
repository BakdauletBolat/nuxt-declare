<template>
  <div class="bg-white px-4 py-6 h-[100vh] text-black absolute left-0 top-full z-30 w-[100vw]">
    <div class="h-16 flex justify-between items-center mx-auto container" >
      <div class=" cursor-pointer space-y-[4px] focus:outline-none" @click="emit('changeState')">
        <div class="w-5 h-0.5 bg-white rounded transform transition rotate-45 translate-y-1.5 bg-black ease-in-out" ></div>
        <div class="w-5 h-0.5 bg-white rounded transform transition opacity-0 bg-black ease-in-out" ></div>
        <div class="w-5 h-0.5 bg-white rounded transform transition -rotate-45 -translate-y-1.5 bg-black ease-in-out"></div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="mobile-menu-navigator">
        <div v-for="menu_item in menu_list">
          <div class="flex cursor-pointer justify-between py-4" @click="changeActiveMenu(menu_item)" >
            <div>{{menu_item.title}}</div>
            <img :src="RightArrow" />
          </div>
          <CategoryPage v-if="activeId.id == menu_item.id"
                         :children="menu_item.children"
                         :item="menu_item"
                         :change-active-item="changeActiveMenu"
          ></CategoryPage>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RightArrow from '@/assets/icons/right-arrow.svg';
import {ref,defineEmits} from 'vue';
import CategoryPage from "@/components/Header/MenuPage/CategoryPage.vue";

const emit = defineEmits(['changeState']);

interface IMobileMenuItem {
  id: number,
  title: string
}

const activeId = ref<IMobileMenuItem>({
  id:0,
  title:''
});

const changeActiveMenu = (value?: IMobileMenuItem) => {
  if (value == undefined) {
    activeId.value = {
      id: 0,
      title: ''
    }
    return;
  }

  activeId.value = value!;
}
const menu_list = [
  {
    id: 1,
    title:'Ювелирные изделия',
    children: [
      {
        id: 5,
        title: 'Все изделия'
      }
    ]
  },
  {
    id: 2,
    title:'Свадьба',
    children: [
      {
        id: 5,
        title: 'Все изделия'
      }
    ]
  },
  {
    id: 3,
    title:'Подарки',
    children: [
      {
        id: 5,
        title: 'Все изделия'
      }
    ]
  },
  {
    id: 4,
    title:'Серебро',
    children: [
      {
        id: 5,
        title: 'Все изделия'
      }
    ]
  }
]
</script>

