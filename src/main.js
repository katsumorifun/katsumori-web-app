import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/main.css'
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8081/api';

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
