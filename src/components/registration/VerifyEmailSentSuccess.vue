<template>
  <div>
    <h1 align="center">
      {{ verifyEmailSentSuccessMsg }}
    </h1>
    <br />
    <p align="center">
      Please click on the link that has just been sent to your email account to
      continue the registration proccess
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("registration", ["verifyEmailSentSuccessMsg"])
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
}
p {
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
}
</style>
