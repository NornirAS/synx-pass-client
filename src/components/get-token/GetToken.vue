<template>
  <home-view-template>
    <div slot="title">
      Get your Token
    </div>
    <div slot="description">
      Want to know more about Synx Pass Token?
      <a
        href="https://synxpass.com/"
        class="text-decoration-none"
        target="_blank"
        >Learn here!
      </a>
    </div>
    <div slot="form">
      <get-token-form></get-token-form>
    </div>
    <div slot="helper">
      <router-link
        :to="{ name: 'reset-password' }"
        class="text-decoration-none"
      >
        Forgot you password?
      </router-link>
    </div>
    <div slot="helper">
      Don't have an account?
      <router-link :to="{ name: 'registration' }" class="text-decoration-none"
        >Sign Up
      </router-link>
    </div>
  </home-view-template>
</template>

<script>
import HomeViewTemplate from "../HomeViewTemplate";
import GetTokenForm from "./GetTokenForm";
export default {
  components: {
    HomeViewTemplate,
    GetTokenForm
  }
};
</script>
