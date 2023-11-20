import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './style.css'

const app = createApp(App).use(router)

app.mount('#app')
