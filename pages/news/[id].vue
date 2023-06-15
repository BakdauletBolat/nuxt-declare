<template>
  <SafeArea>
    <Breadcrumb :back-title="'Назад'" :options="options"></Breadcrumb>
    <NewsSkeleton class="px-[20px]" v-if="isLoading"></NewsSkeleton>
    <div v-if="newsStore.news.data" class="container mx-auto px-[15px]">
      <img class="w-full lg:h-[620px] object-cover h-[200px]"
           :alt="newsStore.news?.data.attributes?.title"
           :src="newsStore.news?.data.picture?.data.attributes.url"/>
      <div class="mt-[28px] text-[#525252] text-center text-[16px]">26 АВГУСТА 2022 ГОДА</div>
      <h1 class="text-[21px] text-[#202020] mt-[20px]">{{ newsStore.news.data.attributes?.title }}</h1>
      <p v-html="newsStore.news.data.attributes?.description" class="mt-[16px] text-[#202020]"></p>
    </div>
  </SafeArea>

</template>
<script lang="ts" setup>
import newsStore from '@/entities/news/model/store';
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import {useRoute} from "vue-router";
import NewsSkeleton from "~/entities/news/ui/NewsSkeleton.vue";
import {notify} from "@kyvg/vue3-notification";

const route = useRoute();

const isLoading = ref(false);

const loadNews = async () => {
  isLoading.value = true;
  try {
    await newsStore.loadNews(parseInt(route.params.id.toString()));
    options.value.push({
      title: newsStore.news!.data!.attributes?.title
    });
  } catch (e) {
    console.log(e)
    notify({
      title: "Ошибка при загрузка страницы"
    })
  } finally {
    isLoading.value = false;
  }

}
onMounted(() => {
  loadNews();
})

const options = ref([
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Новости',
    to: {
      name: 'news'
    }
  }
]);
</script>