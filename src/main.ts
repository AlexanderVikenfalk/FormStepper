import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n"
import router from './router/index';
import './index.css'
import icon from '@/components/shared/icon.vue';

createApp(App)
    .use(i18n)
    .use(router)
    .component('icon', icon)
    .mount('#app')
