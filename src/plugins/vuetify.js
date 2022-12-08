// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default createVuetify({
  theme: {
    defaultTheme: darkMode ? 'dark' : 'light'
  }
})