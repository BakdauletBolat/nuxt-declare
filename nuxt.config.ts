// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss',
              '@pinia/nuxt'],
    build: {

    },
    css: [
        '@/assets/main.css'
    ]
})
