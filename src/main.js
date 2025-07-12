import "./assets/main.css";
import "primeicons/primeicons.css";

import router from "./router";
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin)
app.mount("#app");
