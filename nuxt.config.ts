// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',],
    plugins: [
        '@/plugins/vuetify'
    ]  ,
    build: {
        transpile: ['vuetify'],
    },
    css: [
        '@/assets/main.css',
    ]
})
