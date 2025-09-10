<template>
  <div class="flex items-center gap-2 p-2 border border-green-200 rounded-xl">
    <input type="checkbox" :checked="task.done" @change="$emit('toggle')" />
    <span :class="{ 'line-through text-gray-400': task.done }">
      {{ task.text }}
    </span>
    <button
      @click="$emit('delete')"
      class="ml-auto text-red-500 hover:text-red-700">
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m8 8l4 4m0 0l4 4m-4-4l4-4m-4 4l-4 4" /></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Task {
  id: number
  text: string
  done: boolean
}
defineProps<{ task: Task }>()
defineEmits(['toggle', 'delete'])
</script>

