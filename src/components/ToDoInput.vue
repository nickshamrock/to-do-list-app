<template>
  <div class="flex gap-4 max-sm:flex-col">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Добавьте задачу"
      class="rounded-full px-6 py-3"
      type="text"
    />
    <button
      @click="addTodo"
      class="rounded-full bg-white px-6 py-3 transition-all hover:bg-green-500 active:opacity-[0.75]"
    >
      Добавить
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = '';
  }
};
</script>
