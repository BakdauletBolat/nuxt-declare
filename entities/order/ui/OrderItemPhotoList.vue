<template>
    <div class="flex gap-[20px]">
        <div v-for="photo in photos">
        <img :src="photo" class="h-[94px] w-[94px] object-contain" />
    </div>
    </div>
    
</template>
<script lang="ts" setup>
defineProps(['photos']);
</script>