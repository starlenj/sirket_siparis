import Vue from "vue";
import App from "./App.vue";
import router from "./Router.js";
import Notifications from "vue-notification";
import PermssionCheck from "./utils/CheckPermission";
import moment from "moment";
import VueCurrencyInput from "vue-currency-input";
import excel from "vue-excel-export";

Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(VueCurrencyInput);
Vue.use(excel);

router.beforeEach((to, from, next) => {
  PermssionCheck.CheckRoute(to, from, next);
  next();
});
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD.MM.YYYY");
  }
});

Vue.filter("currency", function (value) {
  return parseFloat(value).toFixed(2);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
