import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import httpRequest from './utils/httpRequest'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.config.globalProperties.$http=httpRequest

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
