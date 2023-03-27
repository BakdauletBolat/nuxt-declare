<template>
    <div class="py-[20px] border-b border-b-[#E0E0E0]">
        <div class="flex justify-between">
            <section>
                <div class="text-[#878787] text-[14px]">{{ item.attributes.created_at }}</div>
                <div class="text-[#202020] pt-[12px] text-[16px] font-[500]">{{ item.attributes.number }}</div>
            </section>
            <section>
                <div class="lowercase" :style="{
                    color: get_object_status(item.attributes.status)?.color
                }">{{ get_object_status(item.attributes.status)?.label }}</div>
                <div class="pt-[12px]">{{ item.attributes.amount }}</div>
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

const photos = ['https://www.pngmart.com/files/6/Ring-PNG-Photo.png', 'https://i.pinimg.com/originals/56/37/66/56376681bea0c4135a00f87520e9d02e.png']


const get_object_status = (status: number) => {
    switch (status) {
        case 10:
            return {
                'color': '#DC7878',
                'label': 'Отменен'
            }
    }
}

defineProps<{
    item: IOrder
}>()
</script>