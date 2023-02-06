<template>
  <div>
    <HomeMainSlider></HomeMainSlider>
    <div class="pt-20 pb-16 text-center uppercase text-[22px] md:text-[28px]">
      <div>Специальные цены</div>
    </div>
    <ProductSliderList :is-loading="homeStore.loadingSpecialPriceProducts"
                       :items="homeStore.specialPriceProducts"></ProductSliderList>

    <div v-if="homeStore.lastCollection" class="bg-primary mt-20 bg-[url(@/assets/Banner.png)] bg-cover bg-no-repeat">
      <div class="text-white container flex mx-auto justify-center md:justify-end">
        <div class="md:pt-[100px] md:pr-10 md:pb-16 py-[84px] px-[30px]">
          <div class="text-[28px] uppercase">{{ homeStore.lastCollection?.attributes.title }}</div>
          <div class="text-lg pt-7 uppercase">{{ homeStore.lastCollection?.attributes.author }}</div>
          <div class="text-lg pt-5">{{ homeStore.lastCollection?.attributes.small_description }}</div>
          <NuxtLink :to="{
            name: 'collection-id',
            params: {
              id: homeStore.lastCollection?.id
            }
          }" class="text-lg block pt-[156px] cursor-pointer font-semibold">
            {{ homeStore.lastCollection?.attributes.btn_text }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-base md:text-lg pt-6  md:pt-12 pb-16 md:pb-20 uppercase text-center">
      ПОКАЗАТЬ ВСЕ КОЛЛЕКЦИИ
    </div>
    <div class="pb-7 text-center uppercase text-[22px] md:text-[28px]">
      НАШИ ИЗДЕЛИЯ
    </div>
    <p class="pb-16 text-base md:text-lg text-center px-5">
      Откройте для себя многообразие наших творений
    </p>
    <CategorySlider class="md:!pr-4 !pl-4 !pr-12 container mx-auto"></CategorySlider>
    <div class="container mx-auto mt-[60px] lg:mt-[80px]">
      <h3 class="uppercase text-[21px] lg:text-[32px] text-center">Declare</h3>
      <p class="lg:text-lg text-base mx-auto px-[16px] lg:max-w-[55%] lg:mt-[28px] mt-[20px]">Текст, который будет
        передавать атмосферу бренда и украшений Текст, который будет передавать
        атмосферу бренда и украшений Текст, который будет передавать атмосферу бренда и украшений Текст, который будет
        передавать атмосферу бренда и украшений Текст, который будет передавать атмосферу бренда и украшений Текст,
        который будет передавать атмосферу бренда и украшений</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeMainSlider from "../components/home-main-slider/ui/index.vue";
import ProductSliderList from "~/entities/product/ui/product-slider-list.vue";
import CategorySlider from '@/widgets/category-slider/ui.vue';
import {onMounted} from "vue";
import {useHomeStore} from "~/stores/homeStore";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.loadSpecialPriceProducts();
  homeStore.loadLastCollection();
});
</script>
