<template>
  <v-row class="bg" justify="center">
    <v-col cols="12" md="10" :align="this.isMobile ? 'center' : 'left'">
      <v-img
        alt="synx-pass-logo"
        class="mt-4"
        contain
        src="../assets/synx-pass-logo.webp"
        transition="scale-transition"
        width="149px"
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
    ...mapState(["isMobile"])
  }
};
</script>

<style scoped>
.bg {
  background: url("../assets/synx-pass-background.webp") no-repeat center fixed;
  background-size: cover;
  height: 100%;
}
</style>
