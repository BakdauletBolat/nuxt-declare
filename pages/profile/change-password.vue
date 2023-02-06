<template>
  <div class="container mx-auto px-[15px]">
    <Breadcrumb back-title="Назад"></Breadcrumb>
    <ChangePasswordForm></ChangePasswordForm>
  </div>

</template>
<script setup lang="ts">
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import ChangePasswordForm from "@/widgets/change-password-form/ui.vue";
</script>