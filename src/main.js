import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 在main中导入element-plus的插件
import elemetPlusComponent from './plugins/element'
// 导入 icon的css
import './assets/css/icon.css'

elemetPlusComponent(createApp(App)).use(store).use(router).mount("#app");
