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
      error-count="1"
      type="password"
      name="password"
      label="Password*"
      dark
      required
    ></v-text-field>
    <div class="body-1 font-italic mt-4" align="center">* Required fields</div>
    <v-expand-transition>
      <div v-show="expand" class="body-1" align="center">{{ error }}</div>
    </v-expand-transition>
    <v-btn class="text-capitalize mt-8" type="submit" rounded outlined dark>
      Complete registration
    </v-btn>
  </v-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["username"],
  data() {
    return {
      valid: false,
      expand: false,
      error: "",
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    ...mapMutations("registration", ["resetRegistrationErrorMsg"]),
    submitForm() {
      const isValidFrom = this.$refs.form.validate();
      if (isValidFrom) {
        this.$socket.emit("register_user", {
          username: this.username,
          password: this.password
        });
      }
    },
    resetError() {
      this.expand = false;
      this.error = "";
      this.resetRegistrationErrorMsg();
    }
  },
  computed: {
    ...mapState(["isMobile"]),
    ...mapState("registration", ["registrationErrorMsg"])
  },
  watch: {
    registrationErrorMsg(newValue) {
      this.expand = true;
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
.v-btn--outlined {
  border: thin solid var(--v-secondary-base);
}
</style>
