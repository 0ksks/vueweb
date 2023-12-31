/*!

=========================================================
* Vue White Dashboard - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-white-dashboard
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-white-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import VueRouter from "vue-router";
import SocialSharing from "vue-social-sharing";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";
import App from "./App.vue";
import {createPinia} from "pinia"
import "@/assets/scss/white-dashboard.scss";
import "@/assets/css/nucleo-icons.css";
import "@/assets/demo/demo.css";

import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import RTLPlugin from "./RTLPlugin";
import Notify from "@/components/NotificationPlugin";
import i18n from "./i18n";
import SideBar from "@/components/SidebarPlugin";

Vue.config.productionTip = false;

// router setup
import routes from "./router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
});

// import { createPinia } from "pinia"
const pinia = createPinia();
Vue.use(pinia);
Vue.use(VueRouter);
Vue.use(SocialSharing);
Vue.use(VueGitHubButtons, { useCache: true });
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(RTLPlugin);
Vue.use(SideBar);
Vue.use(Notify);
import { useTokenStore } from "@/stores/token.js";
export const tokenStore = useTokenStore();
import {createPersistedState} from "pinia-persistedstate-plugin";
const persist = createPersistedState();
pinia.use(persist);
new Vue({
  router,
  i18n,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
