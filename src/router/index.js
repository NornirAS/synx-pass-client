import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp";
import RegistrationSuccess from "../components/RegistrationSuccess";
import GetToken from "../components/GetToken";
import DisplayToken from "../components/DisplayToken";
import ResetPassword from "../components/reset-password/ResetPassword";
import ResetPasswordDone from "../components/reset-password/ResetPasswordDone";
import NewPassword from "../components/reset-password/NewPassword";
import NewPasswordDone from "../components/reset-password/NewPasswordDone";

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
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: ResetPassword
      },
      {
        path: "reset-password-done",
        name: "reset-password-done",
        component: ResetPasswordDone
      },
      {
        path: "new-password",
        name: "new-password",
        component: NewPassword
      },
      {
        path: "new-password-done",
        name: "new-password-done",
        component: NewPasswordDone
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
