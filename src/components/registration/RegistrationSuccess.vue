<template>
  <div>
    <h1 align="center">
      {{ registrationSuccessMsg }}
    </h1>
    <br />
    <p align="center">
      Now you can Sign In to
      <a
        href="https://domain.cioty.com"
        class="text-decoration-none synxpass-link"
      >
        CIOTY.com
      </a>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("registration", ["registrationSuccessMsg"])
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
