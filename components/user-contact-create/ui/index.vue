<template>
  <div class="gap-[20px] grid" v-if="createOrderStore.user_contact">
    <TextInput name="first_name" @change-value="changeValueFirstName"
               :default-value="createOrderStore.user_contact?.attributes.first_name"></TextInput>
    <TextInput name="last_name" @change-value="changeValueLastName"
               :default-value="createOrderStore.user_contact?.attributes.last_name"></TextInput>
    <TextInput name="phone" @change-value="changeValuePhoneName"
               :default-value="createOrderStore.user_contact?.attributes.phone"></TextInput>
    <TextInput name="email" @change-value="changeValueEmailName"
               :default-value="createOrderStore.user_contact?.attributes.email"></TextInput>
  </div>
</template>
<script lang="ts" setup>
import createOrderStore from '@/entities/order/model/store';
import TextInput from "~/components/ui/inputs/text-input.vue";
import {useForm} from "vee-validate";

const emit = defineEmits(['submit']);
const {handleSubmit} = useForm();

const changeValueFirstName = (value: any) => {
  createOrderStore.user_contact!.attributes.first_name = value;
}

const changeValueLastName = (value: any) => {
  createOrderStore.user_contact!.attributes.last_name = value;
}

const changeValueEmailName = (value: any) => {
  createOrderStore.user_contact!.attributes.email = value;
}

const changeValuePhoneName = (value: any) => {
  createOrderStore.user_contact!.attributes.phone = value;
}

const submit = handleSubmit((values) => {
  emit('submit', values);
})

</script>