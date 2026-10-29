// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   modules: ['@nuxt/eslint', '@tailwindcss/vite'],
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
// })

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})
