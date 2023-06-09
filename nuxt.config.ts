// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/highlight.js/styles/github.css",
  ],
  script: [{ src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" }],
  plugins: ["~/plugins/highlightjs.client.ts"],
});
