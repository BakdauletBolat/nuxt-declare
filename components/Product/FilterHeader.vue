<template>
    <div class="py-[25.5px] px-[16px] items-center gap-[24px] flex justify-between">
        <div class="flex items-center">
            <div class="sort mr-[16px] cursor-pointer" @click="showModal">
                <FilterIcon color="#202020"></FilterIcon>
            </div>
            <div class="flex items-center cursor-pointer py-[5px] gap-[8px] px-[16px] border-l border-l-[#E0E0E0]" @click="showSortModal">
                <SortIcon color="#202020"></SortIcon>
                <div class="uppercase text-[#202020]">Сортировка</div>
            </div>
        </div>
        <div class="text-[#878787]">{{ productStore.productsData.meta?.pagination.total }} изделий</div>
    </div>
    <Modal :open="isOpenFilter" @handle-cancel="closeModal" title="Фильтр">
        <Accordion v-for="(items, key) in productStore.filters">
            <template #title>
                {{ key }}
            </template>
            <template #body>
                <div @click="productStore.setActiveFilterItem(item.id, key)" v-for="item in items">
                    {{ item.attributes.name }} {{ item.is_select ? 'Выбрано' : 'Не выбрано' }}
                </div>
            </template>
        </Accordion>
    </Modal> 
    <Modal :open="isOpenSort" @handle-cancel="closeSortModal" title="Сортировка">
    </Modal>
</template>
<script lang="ts" setup>
import FilterIcon from '@/assets/icons/filter.vue';
import SortIcon from '@/assets/icons/sort.vue';
import { ref } from 'vue';
import { useProductStore } from '~~/stores/productStore';
import Accordion from '../UI/Accordion.vue';
import Modal from '../UI/Modal.vue';

const isOpenFilter = ref(false);
const isOpenSort = ref(false);

const productStore = useProductStore();


const showModal = () => {
    isOpenFilter.value = true;
}

const showSortModal = () => {
    isOpenSort.value = true;
}

const closeModal = () => {
    isOpenFilter.value = false;
}

const closeSortModal = () => {
    isOpenSort.value = false;
}

</script>