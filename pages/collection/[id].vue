<template>
  <SafeArea>
    <Breadcrumb :options="data"></Breadcrumb>
    <product-list :is-loading="CollectionStore.isLoadingCollectionProducts"
                  :products="CollectionStore.collectionProducts">

    </product-list>
  </SafeArea>
</template>
<script lang="ts" setup>

import CollectionStore from '@/entities/collection/model/store';
import {useRoute} from "vue-router";
import ProductList from "~/entities/product/ui/product-list.vue";
import Breadcrumb, {IBreadcrump} from "~/components/ui/Breadcrumb.vue";

const route = useRoute();
const id = route.params.id;

const data = ref<IBreadcrump[]>([
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Коллекций',
    to: '/collection'
  }
]);


onMounted(async () => {
  await CollectionStore.loadCollection(id);
  data.value.push({
    title: CollectionStore.collection!.attributes.title
  })
});

</script>