import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/main.css'
import axios from 'axios';
import lazyLoadingImage from "./directive/lazyLoading/image"


axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
const DEFAULT_TITLE = "Katsumori"


const app = createApp(App)

app.use(router)
app.use(store)
app.directive('lazy-img', lazyLoadingImage)

router.afterEach((to, from) => {
    document.getElementsByTagName('meta')["description"].content = to.meta.description;
    document.title = DEFAULT_TITLE + "|" + to.meta.title
});

app.mount('#app')
