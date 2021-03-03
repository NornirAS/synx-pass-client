<template>
  <div>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import VerifyEmailForm from "./VerifyEmailForm";
export default {
  data() {
    return {
      error: "",
      isVerifiedEmail: false
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
      this.error = newValue;
    },
    registrationSuccessMsg() {
      this.$router.push({ name: "registration-success" });
    }
  },
  components: {
    VerifyEmailForm
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
