<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    :class="[
      'w-full py-2 rounded transition',
      variant === 'secondary'
        ? 'bg-gray-200 text-gray-800'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    ]"
  >
    <slot />
  </button>
</template>