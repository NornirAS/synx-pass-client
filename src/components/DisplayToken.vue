<template>
  <div>
    <h1 align="center">
      Your Token
    </h1>
    <br />
    <p align="center">
      {{ token }}
    </p>
    <p align="center">
      <router-link
        :to="{ name: 'registration' }"
        class="text-decoration-none synxpass-link"
        >Back Home
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.state.authModule.idToken;
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
