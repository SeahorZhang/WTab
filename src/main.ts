import { Icon } from '@iconify/vue'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { initLayout } from '@/store'
initLayout()

const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')
