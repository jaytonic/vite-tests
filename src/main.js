import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(PrimeVue);
app.component("Button", Button);
app.use(router);
app.mount("#app");
