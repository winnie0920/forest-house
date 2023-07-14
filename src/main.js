import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/css/main.css";
import "bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/common/font-awesome";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
router.isReady().then(() => app.mount("#app"));
