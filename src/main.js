import Vue from "vue";
import App from "./App.vue";

// Libraries:
import "tailwindcss/dist/tailwind.css";
import VueRouter from "vue-router";

// Components:
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Index, name: "Index" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// });

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
