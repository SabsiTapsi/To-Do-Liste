<template>
  <div v-if="tasks.length > 0" class="space-y-2 rounded-xl">
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle', task.id)"
      @delete="$emit('delete', task.id)"
      class="bg-gray-50 border-b-2"
    />
  </div>
  <p v-else class="text-gray-50 italic">Keine Aufgaben vorhanden...</p>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { PropType } from 'vue'

interface Task {
  id: number
  text: string
  done: boolean
}

defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    required: true
  }
})
defineEmits(['toggle', 'delete'])
</script>
