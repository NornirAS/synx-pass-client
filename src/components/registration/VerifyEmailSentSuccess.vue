<template>
  <home-view-template>
    <div slot="title">
      {{ verifyEmailSentSuccessMsg }}
    </div>
    <div slot="description">
      Please click on the link that has just been sent to your email account to
      continue the registration proccess
    </div>
  </home-view-template>
</template>

<script>
import { mapState } from "vuex";
import HomeViewTemplate from "../HomeViewTemplate";
export default {
  computed: {
    ...mapState("registration", ["verifyEmailSentSuccessMsg"])
  },
  components: {
    HomeViewTemplate
  }
};
</script>
