/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            serif: ['Open Sans', 'serif'],
        },
        extend: {
            colors: {
                primary: '#CECECE'
            }
        },
    },
    content: [
        "./components/**/*.{js,vue,ts}",
        "./entities/**/*.{js,vue,ts}",
        "./widgets/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
      ],
    plugins: [],
}
