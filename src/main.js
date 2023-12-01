import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import components from './components'
import directives from './directives'

const app = createApp(App)

app.use(components)
app.use(directives)

app.mount('#app')
