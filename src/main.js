import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-141217049-1"
});

Vue.config.productionTip = false;

//Initialize netlify identity
netlifyIdentityWidget.init();

//Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://vuejs-app-testproject.netlify.com/.netlify/identity",
  setCookie: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
