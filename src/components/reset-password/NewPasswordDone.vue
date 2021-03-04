<template>
  <home-view-template>
    <div slot="title">
      Congratulations!
    </div>
    <div slot="description">
      Password has been successfully changed
    </div>
    <div slot="helper">
      <router-link
        :to="{ name: 'get-token' }"
        class="text-decoration-none synxpass-link"
        >Get your Token
      </router-link>
    </div>
  </home-view-template>
</template>

<script>
import HomeViewTemplate from "../HomeViewTemplate";
export default {
  components: {
    HomeViewTemplate
  }
};
</script>
