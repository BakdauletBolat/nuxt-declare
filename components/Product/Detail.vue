<template>
  <div>
    <h1 class="text-xl font-medium ">{{ product.attributes.title }}</h1>
    <div class="lg:mt-[28px] mt-[24px] text-base text-[#878787] font-normal">Артикул: {{ product.attributes.article }}
    </div>
    <div class="lg:mt-[28px] mt-[24px] text-lg flex gap-[12px] items-center text-[#202020]">
      {{ product.attributes.price }} ₸
      <span class="text-base text-[#878787] line-through">{{ product.attributes.old_price }} ₸</span>
    </div>
    <InfoText class="lg:mt-[28px] mt-[24px] text-base">В рассрочку от 5 990 ₸/мес
      <template v-slot:info-text>
        Тест инфо
      </template>
    </InfoText>
    <InfoText class="mt-[16px]">До +7 654 БТ за покупку
      <template v-slot:info-text>
        Тест инфо фы фы вф вф ыв фв фыв фы вфы вф ывф
      </template>
    </InfoText>
    <GroupButton class="mt-[48px]" :activeId="activeId" @onChange="selectSize"></GroupButton>
    <p class="uppercase text-base mt-[28px] text-[#27213DB2]">РУКОВОДСТВО ПО РАЗМЕРАМ</p>
    <Button :is-loading="isLoading"
            class="lg:mt-[48px] mt-[32px] uppercase"
            :type-button="isInCard ? 'bordered': 'primary'"
            @click="addToCard">{{ isInCard ? 'В корзину' : 'ДОБАВИТЬ В КОРЗИНУ' }}
    </Button>
    <Button  class="mt-[9px]" typeButton="secondary">КУПИТЬ В 1 КЛИК <span><img :src="RightArrow" alt=""></span></Button>
    <Accordion>
      <template v-slot:title>ДОСТАВКА И ОПЛАТА</template>
      <template v-slot:body>
        Доставка по Казахстану до 5-и рабочих дней. <br>
        Выбирайте удобный для вас способ оплаты:
        <ul>
          <li>
            1. Онлайн оплата банковской картой.
          </li>
          <li>
            2. Оплата наличными при получении.
          </li>
          <li>
            3. Оплата в рассрочку.
          </li>
        </ul>
      </template>
    </Accordion>
    <Accordion>
      <template v-slot:title>ВОЗВРАТ И ОБМЕН</template>
      <template v-slot:body>
        Доставка по Казахстану до 5-и рабочих дней
      </template>
    </Accordion>
    <Accordion>
      <template v-slot:title>ГАРАНТИЯ</template>
      <template v-slot:body>
        Доставка по Казахстану до 5-и рабочих дней
      </template>
    </Accordion>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import InfoText from "~/components/ui/InfoText.vue";
import GroupButton from "~/components/ui/GroupButton.vue";
import Button from "~/components/ui/Button.vue";
import RightArrow from '@/assets/icons/right-arrow.svg';
import Accordion from "~/components/ui/Accordion.vue";
import {IProduct} from '~~/models/product';
import cardStore from '@/entities/card/model/store';
import {v4 as uuidv4} from 'uuid';

const props = defineProps<{
  product: IProduct
}>();

const isLoading = ref<boolean>(false);

console.log(props.product);

const isInCard = computed(() => {
  const index = cardStore.card?.attributes.items.findIndex(cardItem => cardItem.product.data.id == props.product.id);
  return index != undefined && index! != -1;
});

const addToCard = async () => {
  if (!isInCard.value) {
    isLoading.value = true;
    try {
        await cardStore.addCardItem({
      id: uuidv4(),
      object: 'Card',
      attributes: {
        product_id: props.product.id as number,
        quantity: 1
      },
      product: {
        data: props.product
      }
    });
    }
    catch (e) {
      console.log(e)
    }
    finally {
      isLoading.value = false;
    }

  }

  cardStore.openModal();
}

const activeId = ref(1);

const selectSize = (value: any) => {
  activeId.value = value.id;
}
</script>