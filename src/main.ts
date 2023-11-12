import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from '@/i18n'
import router from './router/index'
import './index.css'
import Icon from '@/components/shared/iconPresenter.vue'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .component('Icon', Icon)
  .mount('#app')
