<template>
  <v-app>
    <v-main>
      <v-container :style="mainContainerStyle" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mainContainerStyle: {
        height: "100%",
        padding: "0 1em"
      }
    };
  },
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
.v-main {
  height: 100vh;
}
.theme--dark.v-label {
  font-style: italic;
  padding-left: 0.5em;
  padding-right: 0.1em;
}
</style>
