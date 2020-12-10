<template>
  <v-row class="bg" justify="center">
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
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile ? "center" : "left";
    }
  }
};
</script>

<style scoped>
.bg {
  background: url("../assets/synx-pass-background.png") no-repeat center fixed;
  background-size: cover;
  height: 100%;
}
</style>
