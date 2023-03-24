import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/*import './assets/main.css'*/
import '../src/components/Css/Dashboard.css'
import '../src/components/Css/Forms.css'
import '../src/components/Css/Dash.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')