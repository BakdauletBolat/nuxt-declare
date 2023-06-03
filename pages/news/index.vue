<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <Breadcrumb :options="options"></Breadcrumb>
      <NewsList :is-loading="isLoadingNewsList" v-if="newsStore.newsList?.data" :items="newsStore.newsList.data"></NewsList>
      <div class="flex justify-center mt-[50px] items-center" >
        <NuxtLink v-if="newsStore.newsList.meta" v-for="item in newsStore.newsList.meta!.pagination.total_pages" 
        :class="{
          '!text-black': newsStore.newsList.meta.pagination.current_page == item
        }"
        class="px-[20px] py-[10px] text-[#938F9E] text-[18px] border-r-[#E4ABC780] border-r" 
        
        :to="{
          name: 'news',
          query: {
            page: item
          }
        }">{{ item }}</NuxtLink>
      </div>
    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import newsStore from '@/entities/news/model/store';
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import NewsList from "~/entities/news/ui/NewsList.vue";
import {notify} from "@kyvg/vue3-notification";

const isLoadingNewsList = ref(false);


const route = useRoute();

watch(route, ()=>{
  console.log(route.query);
  if (route.query.page != undefined) {
    newsStore.loadNewsList(parseInt(route.query.page!.toString()));
  }
});

onMounted(async () => {
  console.log(route.query);
  isLoadingNewsList.value = true;
  try {
    if (route.query.page != undefined) {
      await newsStore.loadNewsList(parseInt(route.query.page!.toString()));
    }
    else {
      await newsStore.loadNewsList(1);
    }

  } catch (e) {
    console.log(e);
    notify({
      title: 'Что то пошло не так при загрузке новостей'
    })
  }
  finally {
    isLoadingNewsList.value = false;
  }

});
const options = [
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Новости'
  }
]
</script>