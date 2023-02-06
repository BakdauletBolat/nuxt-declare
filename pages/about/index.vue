<template>
  <SafeArea>
    <div class="container mx-auto px-[15px]">
      <Breadcrumb :options="options"></Breadcrumb>
      <PageTitleUi title="Миссия Declare"></PageTitleUi>
      <p class="lg:max-w-[790px] mx-auto">Предоставить любителям украшений изделия высокого качества, идеальной
        обработки и техники изготовления.
        Превращать будни в праздники. Особые случаи делать памятными.
        Украшать драгоценными моментами каждый день, а вместе с этим делать красивее саму жизнь.</p>
      <img class="w-full object-cover h-[200px] lg:h-[620px] mt-[24px] lg:mt-[48px]" src="@/assets/mission/1.png"/>
      <div class="mt-[40px]  lg:mt-[80px] gap-[20px] lg:gap-[68px] grid lg:grid-cols-[3fr,5fr] items-center">
        <img class="w-full h-[580px] object-cover order-1 lg:order-2" src="@/assets/mission/2.png"/>
        <p class="w-full order-2 lg:order-1">Мы рады проснуться утром, зная, что делаем счастливыми других людей</p>
      </div>
      <div class="mt-[40px] lg:mt-[80px] gap-[20px] lg:gap-[68px] grid lg:grid-cols-[5fr,3fr] items-center">
        <img class="w-full h-[580px] gap-[20px] object-cover" src="@/assets/mission/3.png"/>
        <p class="">В коллегах нам важна их экспертность, смелость быть честными друг с другом и креативный подход к
          решению всех задач. Это и ориентирует нас на победы.
          Мы видим и ценим вклад каждого сотрудника.
          Баланс «работа-жизнь» даёт нам возможность гордиться своими профессиональными достижениями и быть счастливыми
          персонально.</p>
      </div>
      <div class="mt-[40px] lg:mt-[80px] gap-[20px] lg:gap-[48px] grid">
        <img class="w-full h-[200px] lg:h-[472px] object-cover" src="@/assets/mission/4.png"/>
        <p class="max-w-[790px] mx-auto">Потребитель должен быть счастлив от обладания Declare. Мы не согласны на
          меньшее.
          Только безупречные украшения, их долговечность, абсолютный комфорт от контакта. Мы гордимся качеством Declare
          и готовы предвосхищать, предлагая лучшее.</p>
      </div>
      <div class="mt-[40px] lg:mt-[80px] gap-[20px] lg:gap-[68px] grid lg:grid-cols-[5fr,3fr] items-center">
        <img class="w-full h-[580px] object-cover" src="@/assets/mission/5.png"/>
        <p class="">Мы стремимся быть идеальным партнёром и строим отношения на порядочности, доверии и надёжности.
          Declare — это долговечность не только наших украшений, но и тесных плодотворных взаимоотношений. Никаких
          компромиссов с совестью.</p>
      </div>
      <div class="mt-[40px] lg:mt-[80px] gap-[20px] lg:gap-[68px] grid lg:grid-cols-[3fr,5fr] items-center">
        <img class="w-full h-[580px] object-cover order-1 lg:order-2" src="@/assets/mission/6.png"/>
        <p class="lg:order-1 order-2">Планета. Предлагая красоту, делая людей счастливыми, провозглашая экологичность в общении, мы помним
          о том, что Земля — это наш дом. И без должного отношения к окружающей среде, все было бы напрасно.
          Экологичность, технологичность, безопасность и комфорт.</p>
      </div>
    </div>
  </SafeArea>
</template>
<script lang="ts" setup>
import Breadcrumb from "~/components/ui/Breadcrumb.vue";

const options = [
  {
    title: 'Главная',
    to: '/'
  },
  {
    title: 'О Компаний'
  }
]
</script>