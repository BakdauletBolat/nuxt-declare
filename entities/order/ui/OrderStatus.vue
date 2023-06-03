<template>
    <div class="lowercase" :style="{
                    color: get_color(status)
    }">{{ status.name }}</div>
</template>
<script lang="ts" setup>
import { IStatus } from '../model/interface';

const props = defineProps<{
    status: IStatus
}>();


const get_color = (status: IStatus) => {
    switch (status.alias) {
        case 'NEW':
            return '#1E90FF'
    }
}


</script>