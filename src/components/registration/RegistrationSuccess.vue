<template>
  <home-view-template>
    <div slot="title">
      {{ registrationSuccessMsg }}
    </div>
    <div slot="description">
      Now you can Sign In to
      <a
        href="https://domain.cioty.com"
        rel="noopener noreferrer"
        class="text-decoration-none"
      >
        CIOTY.com
      </a>
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
export default {
  computed: {
    ...mapState("registration", ["registrationSuccessMsg"])
  },
  components: {
    HomeViewTemplate
  }
};
</script>
