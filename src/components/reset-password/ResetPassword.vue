<template>
  <home-view-template>
    <div slot="title">
      Forgot your password?
    </div>
    <div slot="description">
      Don't worry! Just fill in your email and we'll send you a link to reset
      your password.
    </div>
    <div slot="form">
      <reset-password-form></reset-password-form>
    </div>
    <div slot="helper">
      Don't have an account?
      <router-link
        :to="{ name: 'registration' }"
        class="text-decoration-none synxpass-link"
        >Sign Up
      </router-link>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
import ResetPasswordForm from "./ResetPasswordForm";
export default {
  computed: {
    ...mapState("resetPassword", ["resetPasswordSuccess"])
  },
  watch: {
    resetPasswordSuccess() {
      this.$router.push({ name: "reset-password-done" });
    }
  },
  components: {
    HomeViewTemplate,
    ResetPasswordForm
  }
};
</script>
