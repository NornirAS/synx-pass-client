<template>
  <v-row>
    <v-col cols="12">
      <h1 align="center">
        Register at SynxPass and explore the world of Real Time Web
      </h1>
      <p align="center">
        Want to know more about Synx Pass?
        <a
          href="https://synxhive.com/"
          class="text-decoration-none synxpass-link"
          target="_blank"
          >Learn here!
        </a>
      </p>
    </v-col>
    <v-col cols="12">
      <SignUpForm />
      <p align="center">
        Already have an account?
        <router-link
          :to="{ name: 'get-token' }"
          class="text-decoration-none synxpass-link"
          >Get your Token
        </router-link>
      </p>
    </v-col>
  </v-row>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
export default {
  computed: {
    successMessage() {
      return this.$store.state.registrationModule.successMessage;
    }
  },
  watch: {
    successMessage() {
      this.$router.push({ name: "registration-success" });
    }
  },
  components: {
    SignUpForm
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
}
p {
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
}
.synxpass-link {
  color: #dd5745;
}
</style>
