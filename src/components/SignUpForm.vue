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
            v-model="authData.username"
            :rules="usernameRules"
            :counter="64"
            error-count="2"
            type="email"
            name="email"
            label="Synx ID* (email)"
            dark
            required
          ></v-text-field>
          <v-text-field
            v-model="authData.password"
            :rules="passwordRules"
            :counter="32"
            error-count="2"
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
            error-count="2"
            type="password"
            name="password"
            label="Confirm Password*"
            dark
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <p align="center">* Required fields</p>
          <p align="center">{{ error }}</p>
        </v-col>
      </v-row>
      <br v-if="!isMobile" />
      <br v-if="!isMobile" />
      <v-row justify="center">
        <v-col cols="12" md="4" align="center">
          <v-btn class="text-capitalize" type="submit" rounded outlined dark>
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      error: "",
      authData: {
        username: "",
        password: ""
      },
      confirmPassword: "",
      colorRed: "#dd5745",
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
    submitForm() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() && this.checkIfPasswordMatch) {
        this.$socket.emit("register_user", this.authData);
      } else if (!this.checkIfPasswordMatch) {
        this.error = "Password doesn't match";
      }
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    registrationError() {
      return this.$store.state.registrationModule.errorMessage;
    },
    checkIfPasswordMatch() {
      return this.authData.password === this.confirmPassword ? true : false;
    }
  },
  watch: {
    registrationError(newValue) {
      this.error = newValue;
    },
    authData: {
      handler() {
        this.error = "";
        this.$store.commit("registrationModule/resetErrorMessage");
      },
      deep: true
    },
    confirmPassword() {
      this.error = "";
      this.$store.commit("registrationModule/resetErrorMessage");
    }
  }
};
</script>

<style>
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
