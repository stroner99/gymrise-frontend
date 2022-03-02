import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugçin)

createApp(App)
  .use(router)
  .mount("#app");