<style lang="scss">
.multi-range-slider-declare {
  box-shadow: none;
  border: none;
  border-radius: 0;

  & .thumb::before {
    border: none;
    box-shadow: none;
    background: #27213D;
    width: 24px;
    height: 24px;
  }

  & .bar-inner {
    border: none;
    box-shadow: none;
    border-radius: 0;
    background: #27213D;
  }

  & .thumb .caption * {
    box-shadow: none;
    background: #27213D;
    border: none;
    border-radius: 0;
  }

  & .bar-left, .bar-right {
    box-shadow: none;
    border-radius: 0;
  }
}

.selected-item {
  border-radius: 18px;
  border: 1px solid #202020;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected-item--active {
  background: #202020;
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
</style>
<template>
  <div class="py-[25.5px] px-[16px] items-center gap-[24px] flex justify-between">
    <div class="flex items-center">
      <div class="sort mr-[16px] cursor-pointer" @click="showModal">
        <FilterIcon color="#202020"></FilterIcon>
      </div>
      <div class="flex items-center cursor-pointer py-[5px] gap-[8px] px-[16px] border-l border-l-[#E0E0E0]"
           @click="showSortModal">
        <SortIcon color="#202020"></SortIcon>
        <div class="uppercase text-[#202020]">Сортировка</div>
      </div>
    </div>
    <div class="text-[#878787]">{{ productStore.productsData.meta?.pagination.total }} изделий</div>
  </div>
  <Modal :open="isOpenFilter" @handle-cancel="closeModal" title="Фильтр">
    <MultiRangeSlider
        class="multi-range-slider-declare"
        :min="0"
        :max="5000000"
        :step="10000"
        :ruler="false"
        :label="false"
        :minValue="minValue"
        :maxValue="maxValue"
        @input="updateValue"
    />
    <div class="flex justify-between">
      <InputField placeholder="ОТ" class="w-[100px]" type="number"
                  @update:value="newValue => minValue = parseInt(newValue, 0)" :value="minValue"></InputField>
      <InputField placeholder="ДО" class="w-[100px]" type="number"
                  @update:value="newValue => maxValue = parseInt(newValue, 0)" :value="maxValue"></InputField>
    </div>
    <Accordion v-for="(items, key) in productStore.filters">
      <template #title>
        {{ key }}
      </template>
      <template #body>
        <RadioButton @click="productStore.setActiveFilterItem(item.id, key)" v-for="item in items"
                     :title="item.attributes.name"
                     :value="item.is_select"></RadioButton>
      </template>
    </Accordion>
    <div class="flex">
      <Button :is-loading="isLoading" @click="submitFilter">Применить</Button>
    </div>
  </Modal>
  <Modal :open="isOpenSort" @handle-cancel="closeSortModal" title="Сортировка">
    <div class="cursor-pointer text-[14px] flex gap-[12px] p-[12px]" v-for="item in sortItems"
         @click="()=>submitSort(item)">
      <div class="selected-item">
        <div v-if="activeSort === item.id" class="selected-item--active">
        </div>
      </div>
      <div>{{ item.title }}</div>
    </div>
    <div class="flex">
      <Button :is-loading="isLoading" @click="closeSortModal">Применить</Button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
//@ts-ignore
import MultiRangeSlider from "multi-range-slider-vue";
import FilterIcon from '@/assets/icons/filter.vue';
import SortIcon from '@/assets/icons/sort.vue';
import {ref} from 'vue';
import {useProductStore} from '~~/stores/productStore';
import Accordion from '../UI/Accordion.vue';
import Modal from '../UI/Modal.vue';
import Button from '@/components/UI/Button.vue';
import InputField from "~/components/UI/InputField.vue";
import RadioButton from "~/components/UI/RadioButton.vue";
import {useRoute} from "vue-router";


const sortItems = [
  {
    id: 1,
    sortName: 'created_at',
    orderName: 'desc',
    title: 'СНАЧАЛА НОВИНКИ'
  },
  {
    id: 2,
    sortName: 'price',
    orderName: 'desc',
    title: 'ПО ВОЗРАСТАНИЮ ЦЕНЫ'
  },
  {
    id: 3,
    sortName: 'price',
    orderName: 'asc',
    title: 'ПО УБЫВАНИЮ ЦЕНЫ'
  }
]

const activeSort = ref(1);

const minValue = ref(1);
const maxValue = ref(5000000);
const orderBy = ref('');
const sortedBy = ref('');
const updateValue = (e: any) => {
  maxValue.value = e.maxValue;
  minValue.value = e.minValue;
}

const isOpenFilter = ref(false);
const isOpenSort = ref(false);
const isLoading = ref(false);

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

const route = useRoute();

const submitSort = async (sortObject: any) => {
  orderBy.value = sortObject.sortName;
  sortedBy.value = sortObject.orderName;
  activeSort.value = sortObject.id
  await submitFilter();
  closeSortModal();
}

const submitFilter = async () => {
  isLoading.value = true;
  try {
    const data = await productStore.submitFilters();
    await productStore.loadProducts(1,
        Object.assign({
          category: parseInt(route.params.id.toString()),
          search: `price:${minValue.value},${maxValue.value}`,
          orderBy: orderBy.value,
          sortedBy: sortedBy.value
        }, data)
    );
    closeModal();
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
    productStore.isLoadingProducts = false;
  }

}

</script>