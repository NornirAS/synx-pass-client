<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      :rules="usernameRules"
      :counter="64"
      error-count="1"
      type="email"
      name="email"
      label="Synx ID* (email)"
      dark
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :counter="32"
      error-count="1"
      type="password"
      name="password"
      label="Password*"
      dark
      required
    ></v-text-field>
    <v-text-field
      v-model="confirmPassword"
      :rules="passwordRules"
      :counter="32"
      error-count="1"
      type="password"
      name="password"
      label="Confirm Password*"
      dark
      required
    ></v-text-field>
    <div class="body-1 font-italic mt-4" align="center">* Required fields</div>
    <v-expand-transition>
      <div v-show="expand" class="body-1" align="center">{{ error }}</div>
    </v-expand-transition>
    <v-btn
      class="text-capitalize mt-8"
      color="primary"
      type="submit"
      rounded
      outlined
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      valid: false,
      expand: false,
      error: "",
      username: "",
      password: "",
      confirmPassword: "",
      usernameRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length) >= 9 || "Password must be minimum 9 characters",
        v => (v && v.length) <= 30 || "Password must be maximum 30 character",
        v =>
          /(?=.*[A-Z])/.test(v) || "Must have at least one uppercase character",
        v => /(?=.*\d)/.test(v) || "Must have at least one number"
      ]
    };
  },
  methods: {
    ...mapMutations("registration", ["resetVerifyEmailSentErrorMsg"]),
    submitForm() {
      const isValidFrom = this.$refs.form.validate();
      if (isValidFrom && this.checkIfPasswordMatch) {
        this.$socket.emit("send_verify_email", {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
      } else if (!this.checkIfPasswordMatch) {
        this.error = "Password must match";
      }
    },
    resetError() {
      this.error = "";
      this.resetVerifyEmailSentErrorMsg();
    }
  },
  computed: {
    ...mapState(["isMobile"]),
    ...mapState("registration", ["verifyEmailSentErrorMsg"]),
    checkIfPasswordMatch() {
      return this.password === this.confirmPassword;
    }
  },
  watch: {
    verifyEmailSentErrorMsg(newValue) {
      this.error = newValue;
    },
    username() {
      this.resetError();
    },
    password() {
      this.resetError();
    },
    confirmPassword() {
      this.resetError();
    },
    error() {
      this.expand = !this.expand;
    }
  }
};
</script>

<style scoped>
.v-btn--outlined {
  border: thin solid var(--v-secondary-base);
}
</style>
