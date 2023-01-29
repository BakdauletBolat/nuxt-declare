<template>
  <div>
    <notifications width="100%" position="bottom center" classes="b-notification">
      <template #body="props">
        <div class="b-notification flex justify-between">
          <p class="notification-title">
            {{ props.item.title }}
          </p>
          <button class="close" @click="props.close">
            <img src="@/assets/icons/exit.svg"/>
          </button>
        </div>
      </template>
    </notifications>

    <Header></Header>
    <Modal :style="{zIndex: '1000'}"
           title="Корзина"
           :open="cardStore.isOpenModal"
           @handle-cancel="cardStore.closeModal">
      <CardModal></CardModal>

    </Modal>
    <slot></slot>
    <MailingForm></MailingForm>
    <FooterVue></FooterVue>
  </div>
</template>
<script lang="ts" setup>

import {onUnmounted, onMounted} from 'vue';
import {useHeaderStore} from "~/stores/headerStore";
import FooterVue from '~~/components/Footer/Footer.vue';
import Header from '@/components/Header.vue';
import MailingForm from '~~/components/UI/MailingForm.vue';
import userStore from '@/stores/userStore';
import cardStore from '@/entities/card/model/store';
import Modal from '~~/components/UI/Modal.vue';
import CardModal from '@/widgets/card-modal/ui.vue';
import {useLocalStorage} from "#imports";

const headerStore = useHeaderStore();
const handleScroll = () => {
  headerStore.useScrollActive();
}

const loadStartUpData = async () => {
  const token = await useLocalStorage('token', undefined).value
  if (token != 'undefined') {
    try {
      await userStore.loadUser();
    } catch (e) {
      console.log(e);
    }
  }
  await cardStore.loadCard();
}

onMounted(() => {
  loadStartUpData();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
<style lang="scss">
.b-notification {

  width: 100%;
  background-color: #E9E9EC;
  padding: 20px;

  .notification-title {
    font-weight: 400;
    font-size: 16px;
  }

}
</style>