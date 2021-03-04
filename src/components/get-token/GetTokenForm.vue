<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      :rules="[v => !!v || 'Username is required']"
      type="email"
      name="email"
      label="Synx ID (email)"
      error-count="1"
      dark
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="[v => !!v || 'Password is required']"
      type="password"
      name="password"
      label="Password"
      error-count="1"
      dark
      required
    ></v-text-field>
    <v-expand-transition>
      <div v-show="expand" class="body-1" align="center">{{ error }}</div>
    </v-expand-transition>
    <v-btn class="text-capitalize mt-8" type="submit" rounded outlined dark>
      Get Token
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
      password: ""
    };
  },
  methods: {
    ...mapMutations("authentication", ["resetAuthenticationError"]),
    submitForm() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.$socket.emit("authenticate", {
          username: this.username,
          password: this.password
        });
      }
    },
    resetError() {
      this.expand = false;
      this.error = "";
      this.resetAuthenticationError();
    }
  },
  computed: {
    ...mapState("authentication", ["token", "authenticationError"])
  },
  watch: {
    username() {
      this.resetError();
    },
    password() {
      this.resetError();
    },
    token() {
      this.resetError();
      this.$router.push({ name: "token" });
    },
    authenticationError(newValue) {
      this.expand = true;
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
