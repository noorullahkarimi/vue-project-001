import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Vuetify from 'vuetify'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(Vuetify);
app.mount('#app');
