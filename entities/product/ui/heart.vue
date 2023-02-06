<template>
  <div class="inline-block cursor-pointer" @click="like()">
    <div class="heart">
      <img v-if="isLiked" :src="Liked"/>
      <img v-else :src="NotLiked"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Liked from '@/assets/icons/liked.svg';
import NotLiked from '@/assets/icons/not-liked.svg';
import FavoriteService from "@/services/favorites-service";
import {onMounted, ref} from "vue";


const isLiked = ref(false);

const props = defineProps(['product'])
const like = () => {
  const value: boolean = FavoriteService.like(props.product);
  isLiked.value = value;
}

onMounted(() => {
  const value: boolean = FavoriteService.checkLiked(props.product);
  isLiked.value = value;
});
</script>