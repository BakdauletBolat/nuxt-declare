<template>
  <div v-if="userStore.isLoadingUser">
    <div class="h-[500px] flex justify-center items-center">
      Загрузка
    </div>
  </div>
  <slot v-else></slot>
</template>
<script setup lang="ts">
import userStore from '~~/stores/userStore';

const router = useRouter();
onMounted(() => {
  watch(userStore, () => {
    if (userStore.user !== null) {
      return router.push({
        name: 'profile'
      })
    }
  });
})


</script>