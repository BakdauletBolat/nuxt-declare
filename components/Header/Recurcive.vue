<template>
    <div class="py-[10px] w-full" :style="{
        paddingLeft: `${depth * 5}px`
    }" v-if="items" v-for="item in items">
        <span @click="setActiveCategory(item)" class="cursor-pointer py-[10px]"
        :class="{
            'active-link': headerStore.activeCategory?.id === item.id
        }">{{ item.attributes.name }}</span>
        <HeaderRecurcive :depth="depth + 1" v-if="item.children.data.length > 0" :items="item.children.data">
        </HeaderRecurcive>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { ICategory } from '~~/models/category';
import { useHeaderStore } from '~~/stores/headerStore';
defineProps(['items', 'depth']);
const headerStore = useHeaderStore();

const setActiveCategory = (category: ICategory) => {
    headerStore.activeCategory = category;
    headerStore.loadCategoriesMenu();
}
</script>