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
      <registration-form></registration-form>
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
import { mapState } from "vuex";
import RegistrationForm from "./RegistrationForm";
export default {
  computed: {
    ...mapState("registration", ["verifyEmailSentSuccessMsg"])
  },
  watch: {
    verifyEmailSentSuccessMsg() {
      this.$router.push({ name: "verification-email-sent-success" });
    }
  },
  components: {
    RegistrationForm
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
