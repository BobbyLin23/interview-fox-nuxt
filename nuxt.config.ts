// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', '@nuxtjs/supabase'],
  components: [
    {
      path: '~/components/basic',
      prefix: 'Basic',
    },
    {
      path: '~/components/interview',
      prefix: 'I',
    },
    '~/components',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
})
