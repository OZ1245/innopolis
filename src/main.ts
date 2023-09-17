import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vLoadingPlugin from '@/plugins/vLoadingPlugin'

import '@/scss/index.scss'
import '@/scss/plugins/vLoadingPlugin.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(vLoadingPlugin)
  .mount('#app')
