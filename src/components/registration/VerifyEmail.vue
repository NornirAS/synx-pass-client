<template>
  <!-- <div>
    <div v-if="!isVerifiedEmail">
      <h1 align="center">
        Email verification. Please wait...
      </h1>
      <br />
      <p align="center">
        {{ error }}
      </p>
    </div>
    <div v-else>
      <h1 align="center">
        Confirm your password
      </h1>
      <verify-email-form :username="username"></verify-email-form>
    </div>
  </div> -->
  <home-view-template>
    <div v-if="!isVerifiedEmail && !isVerifiedEmailError" slot="title">
      Email verification. Please wait...
    </div>
    <div v-if="isVerifiedEmailError" slot="title">
      {{ error }}
    </div>
    <div v-if="isVerifiedEmail" slot="title">
      Confirm your password
    </div>
    <div v-if="isVerifiedEmail" slot="form">
      <verify-email-form :username="username"></verify-email-form>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
import VerifyEmailForm from "./VerifyEmailForm";
export default {
  data() {
    return {
      error: "",
      isVerifiedEmail: false,
      isVerifiedEmailError: false
    };
  },
  created() {
    this.$socket.emit("complete_email_verification", {
      token: this.token,
      username: this.username
    });
  },
  computed: {
    ...mapState("registration", [
      "completeEmailVerificationSuccessMsg",
      "completeEmailVerificationErrorMsg",
      "registrationSuccessMsg"
    ]),
    token() {
      return this.$route.query.token;
    },
    username() {
      return this.$route.query.username;
    }
  },
  watch: {
    completeEmailVerificationSuccessMsg() {
      this.isVerifiedEmail = true;
    },
    completeEmailVerificationErrorMsg(newValue) {
      this.isVerifiedEmailError = true;
      this.error = newValue;
    },
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
