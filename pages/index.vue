<template>
      <div>
    <HomeMainSlider></HomeMainSlider>
    <div class="pt-20 pb-16 text-center uppercase text-[22px] md:text-[28px]">
      Специальные цены
    </div>
    <ProductSliderGroup></ProductSliderGroup>
    <div class="bg-primary mt-20">
      <div class="text-white container flex mx-auto justify-center md:justify-end">
        <div class="md:pt-[100px] md:pr-10 md:pb-16 py-[84px] px-[30px]">
          <div class="text-[28px] uppercase">НОВАЯ КОЛЛЕКЦИЯ</div>
        <div class="text-lg pt-7 uppercase">ROZA RYMBAYEVA</div>
        <div class="text-lg pt-5">Краткое описание коллекции</div>
        <div class="text-lg pt-[156px] font-semibold">КОЛЛЕКЦИЯ ROZA RYMBAYEVA</div>
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
    <CategorySliderGroup class="md:!pr-4 !pl-4 !pr-12 container mx-auto"></CategorySliderGroup>
    <MailingForm></MailingForm>
  </div>
</template>

<script lang="ts" setup>
import HomeMainSlider from "../components/HomeView/HomeMainSlider.vue";
import ProductSliderGroup from "../components/ProductSliderGroup.vue";
import CategorySliderGroup from "../components/CategorySliderGroup.vue";
import MailingForm from "@/components/UI/MailingForm.vue";
</script>
