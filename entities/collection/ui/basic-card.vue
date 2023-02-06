<template>
  <div class="lg:h-[400px] w-full" :style="{
    background: `url(${collection.picture.data.attributes.url}) no-repeat`,
  }"></div>
</template>
<script lang="ts" setup>
import {ICollection} from "~/models/collection";

defineProps<{
  collection: ICollection
}>();
</script>