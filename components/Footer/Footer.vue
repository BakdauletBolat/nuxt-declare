<template>
<div class="my-12 container text-[#343434] flex flex-col lg:flex-row lg:justify-between px-4 mx-auto">
  <FooterMenuItem title="Declare" :items="itemsDeclare">
  </FooterMenuItem>
  <FooterMenuItem title="ИНФОРМАЦИЯ" :items="itemsInf">
  </FooterMenuItem>
  <FooterMenuItem title="ИЗДЕЛИЯ" :items="itemsS">
  </FooterMenuItem>
</div>
  <div class="text-lg px-4 bg-[#EEEEEE] ">
    <div class="container mx-auto space-y-10 py-14 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:space-y-0">
      <div class="space-x-4 flex items-center">
        <img :src="InstagramIcon" alt="">
        <img :src="TwitterIcon" alt="">
      </div>
      <div class="flex space-x-2">
        <img :src="PhoneIcon" alt="">
        <div>+7 (756) 467-23-89</div>
      </div>
      <div class="flex space-x-2">
        <img :src="MailIcon" alt="">
        <div>service@declare.kz</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FooterMenuItem from "@/components/Footer/FooterMenuItem.vue";
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import MailIcon from '@/assets/icons/mail.svg';
const itemsDeclare = [
  {
    title: 'О компании',
    url: '/'
  },
  {
    title: 'Новости',
    url: '/'
  },
  {
    title: 'Контакты',
    url: '/'
  }
];
const itemsInf = [
  {
    title: 'Акции',
    url: '/'
  },
  {
    title: 'Пользовательское соглашение',
    url: '/'
  },
  {
    title: 'Доставка и оплата',
    url: '/'
  },
  {
    title: 'Статус заказа',
    url: '/'
  },
  {
    title: 'Возврат и обмен',
    url: '/'
  },
  {
    title: 'Рассрочка',
    url: '/'
  },
  {
    title: 'Уход за изделиями',
    url: '/'
  },
  {
    title: 'Бонусная система',
    url: '/'
  }
];
const itemsS = [
  {
    title: 'Специальные цены',
    url: '/'
  },
  {
    title: 'Кольца',
    url: '/'
  },
  {
    title: 'Колье и подвески',
    url: '/'
  },
  {
    title: 'Серьги',
    url: '/'
  },
  {
    title: 'Браслеты',
    url: '/'
  },
  {
    title: 'Золото',
    url: '/'
  },
  {
    title: 'Серебро',
    url: '/'
  },
  {
    title: 'Подарки',
    url: '/'
  },
  {
    title: 'Коллекции',
    url: '/'
  },
  {
    title: 'Свадьба',
    url: '/'
  }
];
</script>

<style scoped>

</style>