<template>
    <div class="py-[20px] border-b border-b-[#E0E0E0]">
        <div class="flex justify-between">
            <section>
                <div class="text-[#878787] text-[14px]">{{ item.attributes.created_at }}</div>
                <div class="text-[#202020] pt-[12px] text-[16px] font-[500]">{{ item.attributes.number }}</div>
            </section>
            <section>
                <OrderStatus :status="item.statuses.data[0]"></OrderStatus>
                <div class="pt-[12px]">{{ item.attributes.amount }} ₸</div>
            </section>
        </div>
        <OrderItemPhotoList class="mt-[30px]" :photos="photos"></OrderItemPhotoList>
        <p class="text-[16px] pt-[30px]">доставим до 25 июля 2022</p>
        <div class="flex justify-between pt-[20px]">
            <div class="text-[#CECECE]">2 товара</div>
            <div class="text-[16px] uppercase">ПОДРОБНЕЕ</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { IOrder } from '../model/interface';
import OrderItemPhotoList from './OrderItemPhotoList.vue';
import OrderStatus from './OrderStatus.vue';

const get_object_status = (status: number) => {
    switch (status) {
        case 10:
            return {
                'color': '#DC7878',
                'label': 'Отменен'
            }
    }
}

const props = defineProps<{
    item: IOrder
}>();


const photos = computed(()=>{
    return props.item.positions.data.map(position => {
        return position.product.data.picture.data.attributes.url
    });
});

</script>