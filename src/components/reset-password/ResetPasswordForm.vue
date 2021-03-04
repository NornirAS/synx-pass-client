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
      type="email"
      name="email"
      label="Synx ID (email)"
      error-count="1"
      dark
      required
    ></v-text-field>

    <v-btn class="text-capitalize mt-8" type="submit" rounded outlined dark>
      Reset password
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: "",
      usernameRules: [v => !!v || "Email is required"]
    };
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.$socket.emit("reset_password", {
          username: this.username
        });
      }
    }
  }
};
</script>

<style scoped>
.v-btn--outlined {
  border: thin solid var(--v-secondary-base);
}
</style>
