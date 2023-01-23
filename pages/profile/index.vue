<template>
    <SafeArea>
        <div>Profile</div>
    </SafeArea>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>