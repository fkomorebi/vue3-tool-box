// eslint-disable-next-line no-shadow
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/styles/common.scss'

import App from './App.vue'
import router from './router'
import i18n from '@/i18n'

import SlideInDirective from '@/directive/slide_in'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.directive('slide-in', SlideInDirective)

app.mount('#app')

console.log('app', app)
