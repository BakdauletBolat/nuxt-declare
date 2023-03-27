<template>
    <div class="uppercase cursor-pointer text-[12px] py-[4px] border-b border-b-white" :class="{
        'is-active border-b-[#E4ABC7]': isActive
    }">{{ item.label }}</div>
</template>
<script lang="ts" setup>
defineProps(['item', 'isActive'])
</script>