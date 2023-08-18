import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import messages from "./i18n/index";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.SALETICKETLANG || 'en_GB', // set locale
  fallbackLocale: "en_GB", // set fallback locale
  messages, // set locale messages
});

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

createApp(App).use(router).use(createPinia()).use(i18n).use(vuetify).mount("#app");

window.$t = i18n.global.t
