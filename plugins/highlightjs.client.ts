import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import plaintext from "highlight.js/lib/languages/plaintext";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("yaml", yaml);
  hljs.registerLanguage("text", plaintext);
  nuxtApp.vueApp.use(hljsVuePlugin);
});
