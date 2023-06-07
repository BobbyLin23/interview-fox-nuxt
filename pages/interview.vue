<script setup lang='ts'>
definePageMeta({
  middleware: 'auth',
})

const interviewSteps = useInterviewSteps()

const IStart = resolveComponent('IStart')
const IPreset = resolveComponent('IPreset')
const IChat = resolveComponent('IChat')

const component = computed(() => {
  if (interviewSteps.value === 0)
    return IStart
  if (interviewSteps.value === 1)
    return IPreset
  if (interviewSteps.value === 2)
    return IChat
  return null
})
</script>

<template>
  <component :is="component" />
</template>

<style scoped></style>
