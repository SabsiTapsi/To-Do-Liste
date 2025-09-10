// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    ['@nuxtjs/google-fonts', {
      families: {
          Dosis: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          Rubik: '200..700',
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700',
          }
      }
    }
  ]
]
})