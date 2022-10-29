// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/css/styles.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
});
