import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/main.css";

import DefaultLayout from "./layouts/DefaultLayout.vue";
import NoSearchbarLayout from "./layouts/NoSearchbarLayout.vue";

createApp(App)
  .use(router)
  .component("default-layout", DefaultLayout)
  .component("no-searchbar-layout", NoSearchbarLayout)
  .mount("#app");
