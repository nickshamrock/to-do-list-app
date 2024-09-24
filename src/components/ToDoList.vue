<template>
  <ul class="flex list-none flex-col gap-3">
    <ToDoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '@/stores/todo';
import ToDoItem from './ToDoItem.vue';

const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);
</script>
