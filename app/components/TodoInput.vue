<template>
  <form @submit.prevent="emitAdd" class="flex gap-2 p-6">
    <input
      v-model="model"
      type="text"
      placeholder="Neue Aufgabe eingeben..."
      class="flex-1 border-b-2 rounded-xl border border-green-300 px-3 py-2 text-sm focus:ring focus:ring-green-200"
      />
    <button
      type="submit"
      class="rounded-xl border-b-2 border-green-400 bg-green-300 px-4 py-2 text-sm font-medium text-gray-50 shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Hinzufügen
    </button>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'add', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})

function emitAdd() {
  const value = props.modelValue.trim()
  if (value !== '') {
    emit('add', value)                  
    emit('update:modelValue', '')       
  }
}
</script>
