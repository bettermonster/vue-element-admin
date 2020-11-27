import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import i18n from "./lang";
import "./icons";

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import '@/styles/index.scss';

import './permission';

Vue.config.productionTip = false;

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
