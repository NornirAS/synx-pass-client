import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegistrationPage from "../components/registration/RegistrationPage";
import VerifyEmailSentSuccess from "../components/registration/VerifyEmailSentSuccess";
import VerifyEmail from "../components/registration/VerifyEmail";
import VerifyEmailComplete from "../components/registration/VerifyEmailComplete";
import RegistrationSuccess from "../components/registration/RegistrationSuccess";
import GetToken from "../components/get-token/GetToken";
import DisplayToken from "../components/get-token/DisplayToken";
import ResetPassword from "../components/reset-password/ResetPassword";
import ResetPasswordDone from "../components/reset-password/ResetPasswordDone";
import NewPasswordRedirect from "../components/reset-password/NewPasswordRedirect";
import NewPassword from "../components/reset-password/NewPassword";
import NewPasswordDone from "../components/reset-password/NewPasswordDone";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "registration",
        component: RegistrationPage
      },
      {
        path: "verification-email-sent",
        name: "verification-email-sent-success",
        component: VerifyEmailSentSuccess
      },
      {
        path: "verify-email",
        name: "verify-email",
        component: VerifyEmail
      },
      {
        path: "verify-email-complete",
        name: "verify-email-complete",
        component: VerifyEmailComplete
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
        path: "new-password-redirect",
        name: "new-password-redirect",
        component: NewPasswordRedirect
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
