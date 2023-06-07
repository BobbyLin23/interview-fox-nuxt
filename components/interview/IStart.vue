<script setup lang='ts'>
const interviewSteps = useInterviewSteps()

function goNext() {
  interviewSteps.value = 1
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-48 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto" src="/openai.svg" alt="logo">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Start your interview now!
      </h2>
    </div>
    <div class="mt-10 w-1/4 mx-auto">
      <BasicButton @click="goNext">
        Get Started!
      </BasicButton>
    </div>
  </div>
</template>

<style scoped></style>
