<template>
  <div class="gap-[20px] grid" v-if="createUserContactStore.userContact">
    <TextInput name="first_name" @change-value="changeValueFirstName"
               :default-value="createUserContactStore.userContact?.attributes.first_name"></TextInput>
    <TextInput name="last_name" @change-value="changeValueLastName" :default-value="createUserContactStore.userContact?.attributes.last_name"></TextInput>
    <TextInput name="phone" @change-value="changeValuePhoneName" :default-value="createUserContactStore.userContact?.attributes.phone"></TextInput>
    <TextInput name="email" @change-value="changeValueEmailName" :default-value="createUserContactStore.userContact?.attributes.email"></TextInput>
  </div>
</template>
<script lang="ts" setup>
import createUserContactStore from '../model/store';
import TextInput from "~/components/ui/inputs/text-input.vue";
import userStore from "~/stores/userStore";
import {useForm} from "vee-validate";

const emit = defineEmits(['submit']);
const {handleSubmit} = useForm();

const changeValueFirstName = (value: any) => {
  createUserContactStore.userContact!.attributes.first_name = value;
}

const changeValueLastName = (value: any) => {
  createUserContactStore.userContact!.attributes.last_name = value;
}

const changeValueEmailName = (value: any) => {
  createUserContactStore.userContact!.attributes.email = value;
}

const changeValuePhoneName = (value: any) => {
  createUserContactStore.userContact!.attributes.phone = value;
}

const submit = handleSubmit((values) => {
  emit('submit', values);
})

onMounted(() => {
  createUserContactStore.setUserContact(userStore.user);
})
</script>