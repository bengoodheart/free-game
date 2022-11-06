import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createPinia } from 'pinia'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css'


createApp(App).mount('#app')
const pinia = createPinia()
const app = createApp(App)
app.use(BootstrapVue3)
app.use(pinia)
app.mount('#app')