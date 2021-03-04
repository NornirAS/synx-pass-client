<template>
  <home-view-template>
    <div slot="title">
      Your Token
    </div>
    <div slot="description">
      {{ token }}
    </div>
    <div slot="helper">
      <router-link
        :to="{ name: 'registration' }"
        class="text-decoration-none synxpass-link"
        >Back Home
      </router-link>
    </div>
  </home-view-template>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
export default {
  beforeDestroy() {
    this.resetToken();
  },
  methods: {
    ...mapMutations("authentication", ["resetToken"])
  },
  computed: {
    ...mapState("authentication", ["token"])
  },
  components: {
    HomeViewTemplate
  }
};
</script>
