<template>
  <div class="flex gap-2" role="radiogroup" aria-label="Filter Auswählen">
    <button 
      type="button"
      :aria-pressed="modelValue === opt.value"
      :tabindex="modelValue === opt.value ? 0 : -1"
      v-for="opt, index in options"
      :key="opt.value"
      @click="$emit('update:modelValue', opt.value)"
      @keydown="onKeydown($event, index)"
      :class="[
        'rounded-xl px-3 py-2 text-sm ring-1 transition',
        modelValue === opt.value
          ? 'bg-green-300 text-gray-50 ring-green-400 border-b-2 border-b-green-400'
          : 'bg-gray-50 text-gray-700 ring-green-200 hover:bg-gray-50'
      ]"
    >
      {{ opt.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option { label: string; value: 'all' | 'active' | 'completed' }

const props = defineProps<{ modelValue: 'all' | 'active' | 'completed' }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: 'all' | 'active' | 'completed'): void }>()

const options: Option[] = [
  { label: 'Alle', value: 'all' },
  { label: 'Aktiv', value: 'active' },
  { label: 'Erledigt', value: 'completed' }]

function onKeydown(e: KeyboardEvent, index: number) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    let newIndex = (index + dir + options.length) % options.length
    const buttons = Array.from(
    (e.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLButtonElement>('button') ?? [])

  if (buttons[newIndex]) {
    buttons[newIndex].focus()
    }
  }
}

</script>
