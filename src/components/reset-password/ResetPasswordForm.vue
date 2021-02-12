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
            v-model="email"
            :rules="emailRules"
            type="email"
            name="email"
            label="Synx ID (email)"
            error-count="2"
            dark
            required
          ></v-text-field>
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
            Reset password
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
      email: "",
      emailRules: [v => !!v || "Email is required"],
      colorWhite: "#FFFFFF"
    };
  },
  methods: {
    submitForm() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        console.log("done");
      }
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  }
};
</script>
