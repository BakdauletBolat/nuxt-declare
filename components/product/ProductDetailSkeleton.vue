<template>
    <div class="container mx-auto px-[15px]">
    <div class="main-skeleton flex gap-[30px] lg:flex-row flex-col">
        <div class="flex gap-[30px]">
            <div class="lg:flex hidden flex-col gap-[10px]">
                <div class="skeleton-item lg:w-[104px] lg:h-[104px]"></div>
                <div class="skeleton-item lg:w-[104px] lg:h-[104px]"></div>
                <div class="skeleton-item lg:w-[104px] lg:h-[104px]"></div>
                <div class="skeleton-item lg:w-[104px] lg:h-[104px] "></div>
            </div>
            <div class="skeleton-item lg:w-[400px] lg:h-[400px] h-[300px] w-full"></div>
        </div>
        <div class="w-full">
            <div class="skeleton-item w-full h-[40px]"></div>
            <div class="skeleton-item w-full mt-5 h-[20px]"></div>
            <div class="skeleton-item w-full mt-5 h-[20px]"></div>
            <div class="skeleton-item w-full mt-5 h-[40px]"></div>
            <div class="skeleton-item w-full mt-[150px] h-[40px]"></div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.main-skeleton {
    .skeleton-item {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }
}
@keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
</style>