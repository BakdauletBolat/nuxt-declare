<template>
  <div class="h-[588px] w-full flex items-center"
       :style="`background: url('https://s3-alpha-sig.figma.com/img/9043/a9ca/7fa6523294f1d1548ba168099f22ea11?Expires=1673222400&Signature=Zu4WjsIezy9I3iHRn8vBUe9f4j2Yp-0sumxU7MEWdbutRV2F7OFyooJAP~9OOKMmgx~0vJxctx6PP7oc1Iq3Sz9ONnLSKKVJDLRN8ujt~4MfVq1AaZn4eoRbYWk0ts~3gQ8k5tEZXXua03yR7oyUM5866dqZHjaM1b9Q3c4P2HRA0PzSAluJnToMJHXZIWG4lAmJf87rewPzvlo7dy~QUVxK0u9dqvUkDtiWm1phllCEGy6nPHba2ZYPGdG26w7Dct9k51kQzNAPvsY3gDKjIjqe-Z8ewihuQdhqhbdeMdzRwMLMvqV18el8OXH3YScS9iy5ehfgA56x5TV45iacEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4') no-repeat; background-size: cover;`"
  >
    <div class="container mx-auto h-full">
      <div class="lg:flex lg:flex-row lg:items-end lg:justify-end h-full">
        <div class="lg:max-w-[375px] lg:pt-0 lg:pb-0 lg:justify-center lg:items-start
                  w-full flex flex-col items-center justify-between h-full pt-[72px] pb-[54px]">
          <h2 class="lg:text-3xl text-[21px] font-medium">{{ item.attributes.title }}</h2>
          <p class="lg:block text-base mt-7 hidden">{{ item.attributes.description }}</p>
          <a href="#" class="pb-2 mt-10 inline-block text-base uppercase border-b border-b-[0.5px]">ПОДРОБНЕЕ ОБ
            АКЦИИ</a>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';
import {IBanner} from "~/models/banner";

const props = defineProps<{
  item: IBanner
}>();

const url = `bg-[url('${props.item.picture.data.attributes.url}')]`

</script>