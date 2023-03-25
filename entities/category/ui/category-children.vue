<template>
    <div v-if="items.length === 0">
        Категории не найдено
    </div>
    <div class="py-[10px] w-full text-[#747474]" v-else v-for="item in items"
    :class="{
        'text-[#000000]': headerStore.activeCategory?.id == item.id
    }">
        <span @click="onClickCategory(item)" class="cursor-pointer py-[10px]">{{ item.attributes.name }}</span>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { ICategory } from '~~/models/category';
import { useHeaderStore } from '~~/stores/headerStore';

const headerStore = useHeaderStore()
defineProps<{
    items: ICategory[]
}>();

const activeCategory = ref(null);

const onClickCategory = (item: ICategory) => {
    emit('onClickCategory', item.id);
    headerStore.activeCategory = item;
    headerStore.loadCategoriesMenu();
}

const emit = defineEmits(['onClickCategory'])
</script>