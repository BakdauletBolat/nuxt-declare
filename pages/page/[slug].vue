<template>
    <SafeArea>
        <div class="container mx-auto px-[15px]">
            <UiBreadcrumb :options="items" :centered="true"></UiBreadcrumb>
        <h1 class="lg:my-[30px] my-[10px] text-[21px] lg:text-[32px] text-center">{{ pageStore.page.data?.attributes.title }}</h1>
        <div class="" v-html="pageStore.page.data?.attributes.content"></div>
        </div>
    </SafeArea> 
</template>
<script lang="ts" setup>
import pageStore from '@/entities/pages/model/store';
const route = useRoute();


const items = ref([
    {
        title: "Главная",
        to: '/'
    }
]);

onMounted(async () => {
    await pageStore.loadPage(route.params.slug.toString());
    items.value.push({
        title: pageStore.page.data!.attributes.title,
        to: '#'
    })
})

</script>