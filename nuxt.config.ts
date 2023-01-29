// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',],
    plugins: [
        '@/plugins/vuetify'
    ],
    css: ['@/assets/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['vuetify'],
    }
})
