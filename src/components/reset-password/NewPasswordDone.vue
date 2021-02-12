<template>
  <div>
    <h1 align="center">
      Congratulations!
    </h1>
    <br />
    <p align="center">
      Password has been successfully changed
    </p>
    <p align="center">
      <router-link
        :to="{ name: 'get-token' }"
        class="text-decoration-none synxpass-link"
        >Get your Token
      </router-link>
    </p>
  </div>
</template>

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
.synxpass-link {
  color: #dd5745;
}
</style>
