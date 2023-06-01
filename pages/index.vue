<script setup lang='ts'>
</script>

<template>
  <AppHeader />
  <main class="w-full">
    <section class="w-full h-auto flex items-center justify-around py-[200px]">
      <div>
        <div class="mb-2 text-4xl font-bold">
          Interview Fox
        </div>
        <div class="text-gray-500">
          Your Interview Helper Based On AI
        </div>
      </div>
      <div class="flex items-center justify-center gap-4 dark:bg-neutral-900 px-4">
        <div>Powered By</div>
        <img src="/favicon.ico" alt="next" className="w-8 h-8">
        <img src="/tailwind.svg" alt="tailwind" className="w-10 h-10">
        <img src="/vercel.svg" alt="vercel" className="w-16 h-16">
        <img src="/openai.svg" alt="openai" className="w-10 h-10">
      </div>
    </section>
    <div class="w-full flex justify-center items-center">
      <BasicButton class="w-1/4">
        Get Started
      </BasicButton>
    </div>
  </main>
</template>

<style scoped></style>
