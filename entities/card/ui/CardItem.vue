<template>
  <div class="flex gap-[20px] items-center">
    <div class="card-item__img flex-shrink-0"><img alt="изо"
                                                   :src="cardItem.product?.data?.picture.data.attributes.url"/>
    </div>
    <section class="flex w-full items-center justify-between gap-[30px]">
      <div class="content">
        <h3 class="card-item__title">{{ cardItem.product?.data.attributes.title }}</h3>
        <div class="card-item__price">{{ cardItem.product?.data.attributes.price }} ₸<span
            class="card-item__old-price">{{
            cardItem.product?.data.attributes.old_price
          }} ₸</span></div>
        <div class="card-item__size">Размер 18</div>
        <div class="flex items-center">
          <div @click="quantityValue--" class="card-item__container-q">
            <span class="card-item__minus"></span>
          </div>
          <input v-model="quantityValue" class="card-item__quantity-input" maxlength="3" type="text">
          <div @click="quantityValue++" class="card-item__container-q">
            <span class="card-item__plus"></span>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center card-item__s flex-shrink-0">
        <Heart :product="cardItem.product.data"></Heart>
        <img class="cursor-pointer" @click="removeCardItem"
             :style="{ width: '14px', height: '14px' }" :src="closeImg"/>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import {ICardItem} from '../model/interface';
import closeImg from '~~/assets/icons/exit.svg';
import Heart from '@/entities/product/ui/heart.vue';
import cardStore from '@/entities/card/model/store';

const props = defineProps<{
  cardItem: ICardItem
}>();

const quantityValue = ref(props.cardItem.attributes?.quantity);

const removeCardItem = async () => {
  await cardStore.removeCardItem(props.cardItem.id);
}

const changeQuanty = (value: any) => {
  cardStore.changeQuantity(props.cardItem.id, value);
}

watch(quantityValue, (quantity, prev) => {
  changeQuanty(quantity);
});


</script>
<style lang="scss">
.card-item {
  &__img {
    width: 120px;
    height: 120px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__quantity-input {
    display: inline-block;
    width: 40px;
    padding: 4px;
    border-bottom: 1px solid #878787;
    text-align: center;

    &:focus {
      outline: none;
    }
  }

  &__plus,
  &__minus {
    height: 1px;
    background-color: #878787;
    width: 9px;
    border-radius: 1px;
    position: relative;
    display: block;
  }

  &__plus {
    &:after {
      display: block;
      content: "";
      height: 9px;
      width: 1px;
      left: 4px;
      top: -4px;
      position: absolute;
      background-color: #878787;
    }
  }

  &__container-q {
    height: 33px;
    display: flex;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  &__price {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  &__old-price {
    font-size: 16px;
    text-decoration: line-through;
    color: #878787;
    margin-left: 12px;
  }

  &__size {
    color: #878787;
    font-size: 12px;
    margin-bottom: 16px;
  }

  &__s {
    gap: 10px;
    align-self: baseline;
  }
}
</style>