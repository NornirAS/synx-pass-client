<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.commit("isMobile", this.isMobile);
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  watch: {
    isMobile() {
      this.$store.commit("isMobile", this.isMobile);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.v-application {
  font-family: "Open Sans", sans-serif !important;
}
.v-main {
  height: 100vh;
}
.container.container--fluid {
  height: 100%;
  padding: 0 12px;
  overflow: scroll;
}
.theme--dark.v-label {
  font-style: italic;
  padding-left: 0.5em;
  padding-right: 0.1em;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  transition-delay: 3600s;
}
@media screen and (max-width: 960px) {
  .v-main {
    height: 100%;
  }
}
</style>
