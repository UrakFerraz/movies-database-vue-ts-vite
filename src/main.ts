import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
// import "../node_modules/bulma/css/bulma.css"
import './assets/normalize.css'
import './assets/main.css'


createApp(App).use(router).use(createPinia()).mount('#app')
