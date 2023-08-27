// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Zhortener',
      meta: [
        {
          name: "description",
          content: "A simple and free URL shortener"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }
      ]
    }
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    baseURL: process.env.BASE_URL,
  }
  
})
