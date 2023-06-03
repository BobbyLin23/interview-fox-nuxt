<script setup lang='ts'>
const loginModal = useLoginModal()
const registerModal = useRegisterModal()
</script>

<template>
  <header class="flex px-2 md:px-4 lg:px-6 py-6 shadow items-center justify-between">
    <img class="w-6 h-6" src="/favicon.ico" alt="logo">
    <span class="cursor-pointer hover:underline" @click="loginModal = true">Sign In</span>
  </header>
  <LoginModal :is-open="loginModal" @close="loginModal = false" />
  <RegisterModal :is-open="registerModal" @close="registerModal = false" />
</template>

<style scoped></style>
