<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <Breadcrumb :options="options"></Breadcrumb>
      <PageTitleUi title="Контакты"></PageTitleUi>
    </div>
    <div class="bg-[#E4ABC780] px-[15px] gap-[40px] grid lg:grid-cols-3 py-[50px]">
      <div v-for="contact in contacts" class="flex flex-col gap-[15px] items-center justify-center">
          <img class="w-[24px] h-[24px]" :src="contact.icon" />
          <div class="text-[16px] text-[#202020] font-medium">{{contact.title}}</div>
        <div class="text-[16px]">{{contact.description}}</div>
        <a :href="contact.link" class="text-[#72427D] underline">{{contact.linkText}}</a>
      </div>
    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import Breadcrumb from "~/components/ui/Breadcrumb.vue";
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';
import WhatsappIcon from '@/assets/icons/whatsapp.svg';

const contacts = [
  {
    icon: PhoneIcon,
    title: 'Звонок',
    description: 'Свяжитесь с нами, если у вас есть вопросы',
    link: '#tel:+7 (756) 467-23-89',
    linkText: '+7 (756) 467-23-89'
  },
  {
    icon: EmailIcon,
    title: 'Почта',
    description: 'Свяжитесь с нами по почте',
    link: '#mail:service@declare.kz',
    linkText: 'service@declare.kz'
  },
  {
    icon: WhatsappIcon,
    title: 'WhatsApp',
    description: 'Свяжитесь с нашей службой поддержки клиентов',
    link: '#tel:whatsapp',
    linkText: 'WhatsApp'
  }
]


const options = [
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'Контакты'
  }
]
</script>