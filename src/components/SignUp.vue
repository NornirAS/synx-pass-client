<template>
  <div>
    <h1 align="center">
      Register at SynxPass and explore the world of Real Time Web
    </h1>
    <br />
    <p align="center">
      Want to know more about Synx Pass?
      <a
        href="https://synxpass.com/"
        class="text-decoration-none synxpass-link"
        target="_blank"
        >Learn here!
      </a>
    </p>
    <SignUpForm />
  </div>
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
