<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <Breadcrumb :options="options"></Breadcrumb>
      <NewsList :is-loading="isLoadingNewsList" v-if="newsStore.newsList?.data" :items="newsStore.newsList.data"></NewsList>
    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import newsStore from '@/entities/news/model/store';
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import NewsList from "~/entities/news/ui/NewsList.vue";
import {notify} from "@kyvg/vue3-notification";

const isLoadingNewsList = ref(false);

onMounted(async () => {
  isLoadingNewsList.value = true;
  try {
    await newsStore.loadNewsList();
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