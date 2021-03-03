<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
    lazy-validation
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
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
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <p align="center">* Required fields</p>
          <p align="center">{{ error }}</p>
        </v-col>
      </v-row>
      <br v-if="!isMobile" />
      <br v-if="!isMobile" />
      <v-row justify="center">
        <v-col cols="12" align="center">
          <v-btn class="text-capitalize" type="submit" rounded outlined dark>
            Complete registration
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["username"],
  data() {
    return {
      valid: false,
      error: "",
      password: "",
      confirmPassword: "",
      colorRed: "#dd5745",
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
    ...mapMutations("registration", ["resetRegistrationErrorMsg"]),
    submitForm() {
      const isValidFrom = this.$refs.form.validate();
      if (isValidFrom && this.checkIfPasswordMatch) {
        this.$socket.emit("register_user", {
          username: this.username,
          password: this.password
        });
      } else if (!this.checkIfPasswordMatch) {
        this.error = "Password doesn't match";
      }
    },
    resetError() {
      this.error = "";
      this.resetRegistrationErrorMsg();
    }
  },
  computed: {
    ...mapState(["isMobile"]),
    ...mapState("registration", ["registrationErrorMsg"]),
    checkIfPasswordMatch() {
      return this.password === this.confirmPassword ? true : false;
    }
  },
  watch: {
    verifyEmailSentErrorMsg(newValue) {
      this.error = newValue;
    },
    password() {
      this.resetError();
    },
    confirmPassword() {
      this.resetError();
    }
  }
};
</script>

<style scoped>
p {
  font-family: sans-serif;
  font-weight: 300;
  color: #ffffff;
}
.theme--dark.v-btn {
  color: #dd5745 !important;
}
.v-btn__content {
  font-family: sans-serif;
  font-weight: 400;
  color: #ffffff !important;
}
</style>
