<template>
  <v-row class="bg" justify="center">
    <v-col cols="12" md="10" :align="alignDependsOnScreenSize">
      <v-img
        alt="synx-pass-logo"
        class="mt-4"
        contain
        src="../assets/synx-pass-logo.png"
        transition="scale-transition"
        width="150px"
      />
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isMobile"]),
    alignDependsOnScreenSize() {
      return this.isMobile ? "center" : "left";
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
