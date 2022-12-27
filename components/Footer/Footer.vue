<template>
<div class="my-12 container text-[#343434] flex flex-col lg:flex-row lg:justify-between px-4 mx-auto">
  <FooterMenuItem title="Declare" :items="itemsDeclare">
  </FooterMenuItem>
  <FooterMenuItem title="ИНФОРМАЦИЯ" :items="itemsInf">
  </FooterMenuItem>
  <FooterMenuItem title="ИЗДЕЛИЯ" :items="itemsS">
  </FooterMenuItem>
</div>
  <div class="text-lg px-4 bg-[#27213D] ">
    <div class="container text-white mx-auto space-y-10 py-14 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:space-y-0">
      <div class="space-x-4 flex footer__icon items-center">
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
      </div>
      <div class="flex space-x-2 items-center footer__icon">
        <PhoneIcon></PhoneIcon>
        <div>+7 (756) 467-23-89</div>
      </div>
      <div class="flex space-x-2 items-center footer__icon">
        <MailIcon></MailIcon>
        <div>service@declare.kz</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer__icon {
    & svg {
      fill: white;
      & path {
        fill:white;
        stroke: white;
      }
    }
}
</style>
<script lang="ts" setup>
import FooterMenuItem from "@/components/Footer/FooterMenuItem.vue";
import InstagramIcon from 'assets/icons/instagram.vue';
import TwitterIcon from 'assets/icons/twitter.vue';
import PhoneIcon from 'assets/icons/phone.vue';
import MailIcon from 'assets/icons/mail.vue';
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