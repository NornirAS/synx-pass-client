<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
    lazy-validation
  >
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
    <v-btn class="text-capitalize mt-8" type="submit" rounded outlined dark>
      Change password
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      valid: false,
      expand: false,
      password: "",
      confirmPassword: "",
      error: "",
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
    submitForm() {
      const isValid = this.$refs.form.validate();
      if (isValid && this.checkIfPasswordMatch) {
        this.$socket.emit("new_password", {
          tempPassword: this.tempPassword,
          username: this.username,
          password: this.password
        });
      } else if (!this.checkIfPasswordMatch) {
        this.error = "Password must match";
      }
    }
  },
  computed: {
    ...mapState("resetPassword", ["newPasswordError"]),
    checkIfPasswordMatch() {
      return this.password === this.confirmPassword;
    },
    tempPassword() {
      return this.$route.query.token;
    },
    username() {
      return this.$route.query.username;
    }
  },
  watch: {
    newPasswordError(newValue) {
      this.error = newValue;
    }
  }
};
</script>

<style scoped>
.v-btn--outlined {
  border: thin solid var(--v-secondary-base);
}
</style>
