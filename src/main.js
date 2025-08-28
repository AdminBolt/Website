import { createApp } from 'vue'
import App from './components/pages/IndexPage.vue'
import './index.css'
import 'flowbite';
import globalComponents from './global-components'
import globalIcons from './global-icons'
import router from './router';
import vueGtag from 'vue-gtag-next';



const app = createApp(App);

globalComponents(app);
globalIcons(app);

app.use(router)

app.mount('#app')

app.use(vueGtag, {
  property: { id: "G-98T0GXX5F1" }
}, router);