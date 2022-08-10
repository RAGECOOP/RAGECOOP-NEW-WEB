import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Custom imports
import router from '@/router'
import { createI18n } from 'vue-i18n'
import messages from '@/lang'

loadFonts()

// Get the current language by the browser
const userLang = navigator.language || navigator.userLanguage
export const i18n = createI18n({
  locale: userLang,
  fallbackLocale: 'en',
  messages
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .mount('#app')
