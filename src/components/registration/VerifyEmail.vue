<template>
  <home-view-template>
    <div v-if="!isVerifiedEmailError" slot="title">
      Email verification. Please wait...
    </div>
    <div v-else slot="title">
      {{ error }}
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
export default {
  data() {
    return {
      error: "",
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
      "completeEmailVerificationErrorMsg"
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
      this.$router.push({
        name: "verify-email-complete",
        query: { username: this.username }
      });
    },
    completeEmailVerificationErrorMsg(newValue) {
      this.isVerifiedEmailError = true;
      this.error = newValue;
    }
  },
  components: {
    HomeViewTemplate
  }
};
</script>
