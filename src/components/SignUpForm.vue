<template>
  <v-form ref="form" v-model="valid" @submit="submitForm" lazy-validation>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="authData.username"
            :rules="usernameRules"
            :counter="15"
            error-count="2"
            type="text"
            name="username"
            label="Synx ID*"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="authData.password"
            :rules="passwordRules"
            :counter="30"
            error-count="5"
            type="password"
            name="password"
            label="Password*"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="confirmPassword"
            :rules="passwordRules"
            :counter="30"
            error-count="5"
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
        v => !!v || "Username is required",
        v => (v && v.length) >= 4 || "Username must be minimum 4 characters",
        v => (v && v.length) <= 15 || "Username must be maximum 15 character",
        v => /^[A-Za-z]+$/.test(v) || "Only alphabet characters are allowed"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length) >= 9 || "Password must be minimum 9 characters",
        v => (v && v.length) <= 30 || "Password must be maximum 30 character",
        v =>
          /(?=.*[A-Z])/.test(v) || "Must have at least one uppercase character",
        v => /(?=.*\d)/.test(v) || "Must have at least one number",
        v => (!!v && v) === this.authData.password || "Password must match"
      ]
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        this.$socket.emit("register", this.authData);
        this.$refs.form.reset();
      }
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    registrationError() {
      return this.$store.state.registrationModule.errorMessage;
    }
  },
  watch: {
    registrationError(newValue) {
      this.error = newValue;
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
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  transition-delay: 3600s;
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
