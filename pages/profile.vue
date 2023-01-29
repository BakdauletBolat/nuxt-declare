<template>
  <SafeArea>
    <div class="profile-container container mx-auto mt-[28px]">
      <nav class="hidden lg:block">
        <profile-nav-list></profile-nav-list>
      </nav>


      <NuxtPage></NuxtPage>
    </div>
  </SafeArea>
</template>
<script setup lang="ts">
import ProfileNavList from '@/widgets/profile-nav-list/ui/index.vue';

definePageMeta({
  middleware: 'auth'
})
</script>
<style lang="scss">
.profile-container{
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 272px 1fr;

  }
}
</style>