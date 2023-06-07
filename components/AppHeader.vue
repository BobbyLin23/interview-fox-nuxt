<script setup lang='ts'>
const loginModal = useLoginModal()
const registerModal = useRegisterModal()

const user = useSupabaseUser()
</script>

<template>
  <header class="flex px-2 md:px-4 lg:px-6 py-6 shadow items-center justify-between">
    <div class="flex items-center">
      <img class="w-6 h-6" src="/favicon.ico" alt="logo">
      <Navbar v-if="user" />
    </div>
    <button v-if="!user" class="hover:underline" @click="loginModal = true">
      Sign In
    </button>
    <Avatar v-else />
  </header>
  <LoginModal :is-open="loginModal" @close="loginModal = false" />
  <RegisterModal :is-open="registerModal" @close="registerModal = false" />
</template>

<style scoped></style>
