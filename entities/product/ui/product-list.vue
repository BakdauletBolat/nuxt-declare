<template>
  <product-skeleton v-if="isLoading"></product-skeleton>
  <div v-else class="grid grid-cols-2 lg:grid-cols-3">
    <div :key="`${product.id}${index}`" v-for="(product, index) in products"
         :class="{'two-column': product.object === 'Collection'}">
      <ProductCard v-if="product.object === 'Product'" :product="(product as IProduct)">
      </ProductCard>
      <CollectionCard v-else-if="product.object === 'Collection'"
                      :collection="(product as ICollection)"></CollectionCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {IProduct} from "~/models/product";
import {ICollection} from "~/models/collection";
import ProductCard from "@/entities/product/ui/product-card.vue";
import CollectionCard from "~/components/Product/CollectionCard.vue";
import ProductSkeleton from "@/entities/product/ui/product-skeleton.vue";

defineProps<{
  isLoading: boolean,
  products: IProduct | ICollection[]
}>();
</script>