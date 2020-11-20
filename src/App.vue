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
</style>
