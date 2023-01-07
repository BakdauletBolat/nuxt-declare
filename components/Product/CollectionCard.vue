<template>
<div>
    <img class="w-full max-h-[240px] lg:max-h-[472px] object-cover" :src="collection.picture.data.attributes.url" alt="">
</div>
</template>
<script setup lang="ts">
import { ICollection } from '~~/models/collection';

defineProps<{
    collection: ICollection
}>();
</script>