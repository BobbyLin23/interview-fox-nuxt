<script setup lang='ts'>
defineProps<{
  id: string
  type?: HTMLInputElement['type']
  label: string
  modelValue: string
  required?: boolean
  disabled?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <div class="mt-2">
      <input
        id="email"
        :value="modelValue"
        :type="type || 'text'"
        :disabled="disabled"
        :required="required"
        class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
    </div>
  </div>
</template>

<style scoped></style>
