<template>
    <div class="skeleton-component" :style="{
        width: width,
        height: height
    }"></div>
</template>
<script lang="ts" setup>
defineProps(['width', 'height'])
</script>
<style>
.skeleton-component {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s skeleton-loading linear infinite;
    border-radius: 5px;
}

@keyframes skeleton-loading {
    to {
        background-position-x: -200%;
    }
}
</style>