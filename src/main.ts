import "@babel/polyfill";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// console.log(a)
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
