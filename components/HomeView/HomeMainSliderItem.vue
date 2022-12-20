<template>
  <div style="" class="h-[588px] w-full" :class="[url]">

  </div>
</template>
<style>
.slider-bg {
  background-image: url("/assets/Banner.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script lang="ts" setup>
import {defineProps} from 'vue';

const props = defineProps(['item']);

const url = `bg-[${props.item.url}]`

</script>