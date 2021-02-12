<template>
  <div>
    <h1 align="center">
      Forgot your password?
    </h1>
    <br />
    <p align="center">
      Don't worry! Just fill in your email and we'll send you a link to reset
      your password.
    </p>
    <reset-password-form></reset-password-form>
    <p align="center">
      Don't have an account?
      <router-link
        :to="{ name: 'registration' }"
        class="text-decoration-none synxpass-link"
        >Sign Up
      </router-link>
    </p>
  </div>
</template>

<script>
import ResetPasswordForm from "./ResetPasswordForm";
export default {
  components: {
    ResetPasswordForm
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
}
p {
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
}
.synxpass-link {
  color: #dd5745;
}
</style>
