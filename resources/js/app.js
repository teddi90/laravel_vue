

import './bootstrap';
import { createApp } from 'vue';



const app = createApp({});

import router from "./router.js";
import Index from "./components/Index.vue";
import store from "./store";

app.use(router)
app.use(store)
app.component('index', Index);

app.mount('#app');

