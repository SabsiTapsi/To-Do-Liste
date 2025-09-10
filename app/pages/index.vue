<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-gray-800 border border-green-200 rounded-2xl">
    <h1 class="text-gray-50 border-b border-green-200 flex item-center justify-center text-2xl font-bold mb-4">To-Do Liste</h1>
    <TodoInput v-model="newTask" @add="addTask" />

    <TodoFilter v-model="filter" class="my-4" />

    <TodoList
      :tasks="filteredTasks"
      @toggle="toggleTask"
      @delete="deleteTask"
    />

    <TodoFooter
      :remaining="remaining"
      :has-tasks="tasks.length > 0"
    />
  </div>
  <p class="flex justify-center item-center ">{{ message }}</p>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import TodoInput from '~/components/TodoInput.vue'
import TodoFilter from '~/components/TodoFilter.vue'
import TodoList from '~/components/TodoList.vue'
import TodoFooter from '~/components/TodoFooter.vue'

interface Task {
  id: number
  text: string
  done: boolean
}

const tasks = ref<Task[]>([])
const newTask = ref('')
const filter = ref<'all' | 'active' | 'completed'>('all')
const message = ref('Noch nicht geladen...')

onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if (saved) tasks.value = JSON.parse(saved)
  console.log('Komponente ist gemounted')
  message.value = 'Jetzt sichtbar!'
})

watch(tasks, () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}, { deep: true })


function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({ id: Date.now(), text: newTask.value, done: false })
  newTask.value = ''
}
function toggleTask(id: number) {
  const t = tasks.value.find(t => t.id === id)
  if (t) t.done = !t.done
}
function deleteTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const remaining = computed(() => tasks.value.filter(t => !t.done).length)
const filteredTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter(t => !t.done)
  if (filter.value === 'completed') return tasks.value.filter(t => t.done)
  return tasks.value
})
</script>


