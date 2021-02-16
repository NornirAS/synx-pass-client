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
        <v-col cols="12" md="4" align="center">
          <v-btn
            :color="colorWhite"
            class="text-capitalize"
            type="submit"
            rounded
            outlined
            dark
          >
            Change password
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
      colorWhite: "#FFFFFF",
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
      const noError = this.error === "";
      if (isValid && noError) {
        this.$socket.emit("new_password", {
          tempPassword: this.tempPassword,
          username: this.username,
          password: this.password
        });
        this.$refs.form.reset();
      }
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    tempPassword() {
      return this.$route.query.token;
    },
    username() {
      return this.$route.query.username;
    }
  },
  watch: {
    confirmPassword(newValue) {
      this.error = this.password !== newValue ? "Passwords must match" : "";
    }
  }
};
</script>
