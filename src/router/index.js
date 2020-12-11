import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp";
import RegistrationSuccess from "../components/RegistrationSuccess";
import GetToken from "../components/GetToken";
import DisplayToken from "../components/DisplayToken";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
      },
      {
        path: "get-token",
        name: "get-token",
        component: GetToken
      },
      {
        path: "token",
        name: "token",
        component: DisplayToken
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
