<template>
  <home-view-template>
    <div slot="title">
      Change password
    </div>
    <div slot="description">
      Enter your new password
    </div>
    <div slot="form">
      <new-password-form></new-password-form>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
import NewPasswordForm from "./NewPasswordForm";
export default {
  computed: {
    ...mapState("resetPassword", ["newPasswordSuccess"])
  },
  watch: {
    newPasswordSuccess() {
      this.$router.push({ name: "new-password-done" });
    }
  },
  components: {
    HomeViewTemplate,
    NewPasswordForm
  }
};
</script>
