<template>
  <div class="-translate-x-full py-6 transition duration-300 absolute bg-white px-4 h-[100vh] text-black top-0 left-0 z-[31] w-full ">
    <div class="category-page container mx-auto">
      <div class="h-16 flex justify-between items-center">
        <img @click="back" class="cursor-pointer w-[12px]" :src="LeftArrow" />
        <div class="self-center text-center basis-full">{{item.title}}</div>
      </div>
      <div class="mobile-menu-navigator">
        <div v-for="menu_item in children" class="flex justify-between py-4">
          <div>{{menu_item.title}}</div>
          <img :src="RightArrow" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted,onUnmounted, defineProps,ref} from 'vue';
import RightArrow from '@/assets/icons/right-arrow.svg';
import LeftArrow from '@/assets/icons/left-arrow.svg';

const statusActivity = ref(false);

interface IMobileMenuItem {
  id: number,
  title: string
}


const props = defineProps<{
  activeStatus: boolean,
  item: IMobileMenuItem,
  changeActiveItem: func,
  children: {
    id:number,
    title: string
  }[]
}>();

onMounted(() => {
  console.log('mounted');
  setTimeout(()=>{
    statusActivity.value = true;
  },1);

});

const back = () => {
  statusActivity.value = false;
  setTimeout(()=>{
    props.changeActiveItem();
  },300);

}

onUnmounted(() => {

  console.log('unmounted');
})


</script>