<template>
  <home-view-template>
    <div slot="title">
      Register at SynxPass and explore the world of Real Time Web
    </div>
    <div slot="description">
      Want to know more about Synx Pass?
      <a
        href="https://synxhive.com/"
        class="text-decoration-none"
        target="_blank"
        >Learn here!
      </a>
    </div>
    <div slot="form">
      <registration-form></registration-form>
    </div>
    <div slot="helper">
      Already have an account?
      <router-link :to="{ name: 'get-token' }" class="text-decoration-none"
        >Get your Token
      </router-link>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
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
    HomeViewTemplate,
    RegistrationForm
  }
};
</script>
