// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    elementPlus: { /** Options */},
    css: ['element-plus/theme-chalk/dark/css-vars.css','~/assets/css/index.scss'],
    app: {
        head: {
            title: 'Rika'
        }
    }
})
