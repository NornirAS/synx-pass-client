<template>
  <div>
    <h1 align="center">
      Get your Token
    </h1>
    <br />
    <p align="center">
      Want to know more about Synx Pass Token?
      <a
        href="https://synxpass.com/"
        class="text-decoration-none synxpass-link"
        target="_blank"
        >Learn here!
      </a>
    </p>
    <GetTokenForm />
    <p align="center">
      <router-link
        :to="{ name: 'reset-password' }"
        class="text-decoration-none synxpass-link"
      >
        Forgot you password?
      </router-link>
    </p>
    <p align="center">
      Don't have an account?
      <router-link
        :to="{ name: 'registration' }"
        class="text-decoration-none synxpass-link"
        >Sign Up
      </router-link>
    </p>
  </div>
</template>

<script>
import GetTokenForm from "./GetTokenForm";
export default {
  computed: {
    successMessage() {
      return this.$store.state.registration.successMessage;
    }
  },
  watch: {
    successMessage() {
      this.$router.push({ name: "registration-success" });
    }
  },
  components: {
    GetTokenForm
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
