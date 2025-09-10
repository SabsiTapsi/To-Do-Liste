<template>
  <div v-if="hasTasks" class="mt-4 text-sm text-gray-50">
    <span class="flex justify-center">{{ remaining }} offen</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  remaining: number
  hasTasks: boolean
}>()
</script>
