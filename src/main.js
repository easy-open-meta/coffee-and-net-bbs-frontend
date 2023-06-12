import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './route/route.js'
import store from './store'

createApp(App).use(store).use(Router).mount('#app')
