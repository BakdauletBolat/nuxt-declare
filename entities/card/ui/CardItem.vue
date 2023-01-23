<template>
    <div class="flex gap-[20px] items-center">
        <div><img class="card-item__img" :src="cardItem.attributes.product?.pictures.data[0].attributes.url" /></div>
        <div class="">
            <h3 class="card-item__title">{{ cardItem.attributes.product?.attributes.title }}</h3>
            <div class="card-item__price">{{ cardItem.attributes.product?.attributes.price }} <span
                    class="card-item__old-price">{{
                        cardItem.attributes.product?.attributes.old_price
                    }}</span></div>
            <div class="card-item__size">Размер 18</div>
            <div class="flex items-center">
                <div  @click="quantityValue--"  class="card-item__container-q">
                    <span class="card-item__minus"></span>
                </div>

                <input v-model="quantityValue" class="card-item__quantity-input" maxlength="3" type="text">
                <div @click="quantityValue++" class="card-item__container-q">
                    <span class="card-item__plus"></span>
                </div>
            </div>
        </div>
        <div class="flex items-center card-item__s">
            <HeartIcon width="20" height="20" color="black"></HeartIcon>
            <img class="cursor-pointer" @click="cardStore.removeCardItem(cardItem.id)" :style="{ width: '14px', height: '14px' }" :src="closeImg" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ICardItem } from '../model/interface';
import HeartIcon from '~~/assets/icons/heart.vue';
import closeImg from '~~/assets/icons/exit.svg';
import cardStore from '@/entities/card/model/store';
const props = defineProps<{
    cardItem: ICardItem
}>();

const quantityValue = ref(props.cardItem.attributes.quantity);

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