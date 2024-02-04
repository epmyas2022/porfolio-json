import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import i18n from './lang/i18n'
import router from './router'

const app = createApp(App)
app.use(i18n)
app.use(router)

app.use(createPinia())

app.mount('#app')
