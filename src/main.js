import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fontawesome from './fontawesome'
import './assets/main.css'
import axios from 'axios';
import lazyLoadingImage from "./directive/lazyLoading/image"

axios.defaults.baseURL = 'https://dev.katsumori.fun/api';
const DEFAULT_TITLE = "Katsumori"


const app = createApp(App)

app.use(router)
app.use(store)
app.directive('lazy-img', lazyLoadingImage)
app.component('font-awesome-icon', fontawesome)

router.afterEach((to, from) => {
    document.getElementsByTagName('meta')["description"].content = to.meta.description;
    document.title = DEFAULT_TITLE + "|" + to.meta.title
});

app.mount('#app')
