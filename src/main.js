import { createApp } from 'vue'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

app.use(createPinia())
app.use(router) 

createApp(App).mount('#app')
