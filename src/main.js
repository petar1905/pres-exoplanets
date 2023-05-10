import { createApp } from 'vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(MotionPlugin)
  .mount('#app')
