import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp";
import RegistrationSuccess from "../components/RegistrationSuccess";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "registration",
        component: SignUp
      },
      {
        path: "registration-success",
        name: "registration-success",
        component: RegistrationSuccess
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
