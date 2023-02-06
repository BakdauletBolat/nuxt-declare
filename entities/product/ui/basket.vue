<style lang="scss">
.product-card {
  &__button {
    display: none;
  }

  &:hover {
    & .product-card__button {
      display: block;
    }
  }
}
</style>
<template>
  <div class="product-card__button">
    <Button :is-loading="isLoading"
            class="lg:mt-[48px] hidden lg:block mt-[32px] uppercase px-[15px]"
            :type-button="isInCard ? 'bordered': 'primary'"
            @click="addToCard">
      {{ isInCard ? 'В корзину' : 'ДОБАВИТЬ В КОРЗИНУ' }}
    </Button>
  </div>
  <div class="lg:hidden cursor-pointer" @click="addToCard">
    <img v-if="!isInCard" :src="BasketSvg"/>
    <img v-else :src="BasketChecked"/>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import cardStore from "~/entities/card/model/store";
import {v4 as uuidv4} from "uuid";
import Button from "@/components/ui/Button.vue";
import BasketSvg from '@/assets/icons/basket.svg';
import BasketChecked from '@/assets/icons/basket-cheked.svg';

const props = defineProps(['product']);
const isLoading = ref<boolean>(false);


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
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false;
    }

  }
  cardStore.openModal();
}

</script>