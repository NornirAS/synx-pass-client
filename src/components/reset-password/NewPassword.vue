<template>
  <div>
    <h1 align="center">
      Change password
    </h1>
    <br />
    <p align="center">
      Enter your new password
    </p>
    <new-password-form></new-password-form>
  </div>
</template>

<script>
import NewPasswordForm from "./NewPasswordForm";
export default {
  computed: {
    newPasswordSuccess() {
      return this.$store.state.resetPasswordModule.newPasswordSuccess;
    }
  },
  watch: {
    newPasswordSuccess() {
      this.$router.push({ name: "new-password-done" });
    }
  },
  components: {
    NewPasswordForm
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
</style>
