<template>
  <div class="flex flex-col items-center justify-center gap-[32px] h-full">
    <img class="h-[232px] w-[232px]" :src="product.picture.data.attributes.url" />
    <p class="text-[18px]">{{product.attributes.price}} ₸</p>
  </div>
</template>
<script lang="ts" setup>
import {IProduct} from "~/models/product";

defineProps<{
  product: IProduct
}>()
</script>