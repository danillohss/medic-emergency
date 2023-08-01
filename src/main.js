import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'
const Vue = createApp(App)
Vue.use(router)
Vue.use(Maska)
Vue.use(store)
Vue.mount('#app')