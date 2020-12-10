<template>
  <div>
    <h1 align="center">
      {{ successMessage }}
    </h1>
    <br />
    <p align="center">
      Now you can login to
      <a
        href="http://localhost:8080"
        class="text-decoration-none synxpass-link"
      >
        CIOTY.com
      </a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    successMessage() {
      return this.$store.state.registrationModule.successMessage;
    }
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
