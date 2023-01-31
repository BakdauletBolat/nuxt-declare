<template>

  <div v-if="cardStore.card?.attributes.items.length === 0" class="h-[300px] w-full flex items-center justify-center">
    <div>Пока в корзине нету продуктов</div>
  </div>
  <div v-else class="relative flex flex-col w-full min-h-screen">
    <card-list :items="cardStore.card?.attributes.items"></card-list>
    <div class="fixed gap-[10px] bottom-[10px] lg:w-[494px] flex w-full right-[0px] px-[40px] py[24px]">
      <Button typeButton="secondary">КУПИТЬ В 1 КЛИК</Button>
      <Button @click="navigateToCreate">
        ОФОРМИТЬ
      </Button>
    </div>
  </div>

</template>
<script lang="ts" setup>
import CardList from '@/components/card-list/ui/index.vue';
import cardStore from '@/entities/card/model/store';
import Button from "@/components/ui/Button.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const navigateToCreate = () => {
  router.push({
    name: 'create-order'
  })
  cardStore.closeModal();
}
</script>