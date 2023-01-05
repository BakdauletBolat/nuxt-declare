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
        <div class="text-[#878787]">466 изделий</div>
    </div>
    <Modal :open="isOpenFilter" @handle-cancel="closeModal" title="Фильтр"></Modal>
    <Modal :open="isOpenSort" @handle-cancel="closeSortModal" title="Сортировка">
    </Modal>
</template>
<script lang="ts" setup>
import FilterIcon from '@/assets/icons/filter.vue';
import SortIcon from '@/assets/icons/sort.vue';
import { ref } from 'vue';
import Modal from '../UI/Modal.vue';

const isOpenFilter = ref(false);
const isOpenSort = ref(false);


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