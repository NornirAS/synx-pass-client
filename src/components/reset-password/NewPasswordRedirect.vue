<template>
  <home-view-template>
    <div slot="title">
      Redirecting to new password...
    </div>
  </home-view-template>
</template>

<script>
export default {
  created() {
    this.$router.push({
      name: "new-password",
      query: {
        token: this.token,
        username: this.username
      }
    });
  },
  computed: {
    token() {
      return this.$route.query.token;
    },
    username() {
      return this.$route.query.username;
    }
  }
};
</script>
