<script setup lang='ts'>
defineProps<{
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button :type="type || 'button'" :disabled="disabled" class="w-1/4 rounded-full bg-sky-500 border border-transparent px-3 py-3 disabled:opacity-50 text-black font-bold hover:opacity-75 transition">
    <slot />
  </button>
</template>
