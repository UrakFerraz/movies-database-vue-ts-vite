import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// import "../node_modules/bulma/css/bulma.css"
import './assets/normalize.css'
import './assets/main.css'


createApp(App).use(router).mount('#app')
