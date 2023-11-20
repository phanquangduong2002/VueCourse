import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import './style.css'

const pinia = createPinia()

const app = createApp(App).use(router).use(pinia)

app.mount('#app')
