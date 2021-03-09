<template>
  <home-view-template>
    <div slot="title">
      Confirm your password
    </div>
    <div slot="form">
      <verify-email-form :username="username"></verify-email-form>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
import VerifyEmailForm from "./VerifyEmailForm";
export default {
  computed: {
    ...mapState("registration", ["registrationSuccessMsg"]),
    username() {
      return this.$route.query.username;
    }
  },
  watch: {
    registrationSuccessMsg() {
      this.$router.push({ name: "registration-success" });
    }
  },
  components: {
    HomeViewTemplate,
    VerifyEmailForm
  }
};
</script>
