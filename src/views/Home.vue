<template>
  <v-row class="bg" style="height: 100%" justify="center">
    <v-col cols="12" md="10" :align="isMobile">
      <br />
      <v-img
        alt="Cioty"
        class="shrink mr-2"
        contain
        src="../assets/synx-pass-logo.png"
        transition="scale-transition"
        width="150"
      />
    </v-col>
    <v-col cols="12">
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
    </v-col>
  </v-row>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile ? "center" : "left";
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
  font-family: sans-serif;
  font-weight: 300;
  color: #ffffff;
}
p {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 300;
  color: #ffffff;
}
.bg {
  background: url("../assets/synx-pass-background.png") no-repeat center fixed;
  background-size: cover;
}
.synxpass-link {
  color: #dd5745;
}
</style>
