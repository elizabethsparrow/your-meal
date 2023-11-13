import './shared/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './shared/router'

import 'primevue/resources/themes/saga-orange/theme.css'
import PrimeVue from 'primevue/config'
import primevueComponentsConf from './app/conf/primevue-components.conf'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

primevueComponentsConf.forEach((component) => {
  app.component(component.name, component.path)
})

app.mount('#app')
