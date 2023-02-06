<template>
  <div v-if="userStore.isLoadingUser" class="h-screen w-full flex items-center justify-center">
    <Spinner :color="'#27213D'"></Spinner>
  </div>
  <slot v-else>
  </slot>
</template>
<script lang="ts" setup>
import userStore from "~/stores/userStore";
import Spinner from "~/components/ui/Spinner.vue";
import {useLocalStorage} from "#imports";
import cardStore from "~/entities/card/model/store";

const loadStartUpData = async () => {
  const token = await useLocalStorage('token', undefined).value
  if (token != 'undefined') {
    try {
      await userStore.loadUser();
    } catch (e) {
      console.log(e);
    }
  }
}

const route = useRoute();

const guest_routes = ['authorization', 'registration', 'verify-id']
const private_routes = [
  'create-order', 'create-order-payment',
  'profile', 'profile-my-addresses', 'profile-my-addresses-create', 'profile-my-addresses-id',
  'profile-change-password', 'profile-my-orders', 'profile-push-news', 'profile-user-information',
]

onBeforeMount(async () => {
  await loadStartUpData();
  if (userStore.user !== null) {
    if (guest_routes.includes(route.name!.toString())) {
      navigateTo({
        name: 'profile'
      });
    }
  } else {
    if (private_routes.includes(route.name!.toString())) {
      navigateTo({
        name: 'authorization'
      });
    }
  }

  watch(route, () => {
    if (userStore.user !== null) {
      if (guest_routes.includes(route.name!.toString())) {
        navigateTo({
          name: 'profile'
        });
      }
    } else {
      if (private_routes.includes(route.name!.toString())) {
        navigateTo({
          name: 'authorization'
        });
      }
    }
  })
  await cardStore.loadCard();
})

</script>