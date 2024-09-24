<template>
  <li class="flex w-[500px] cursor-pointer items-center gap-5 max-sm:w-[300px]">
    <span @click="toggleTodo">{{ todo.completed ? '❌' : '✔️' }}</span>
    <span @click="toggleTodo" :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
    <button
      @click="removeTodo"
      class="ml-auto rounded-full bg-white px-2 py-2 transition-all hover:bg-red-500 active:opacity-[0.75]"
    >
      Удалить
    </button>
  </li>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const props = defineProps<{ todo: { id: number; text: string; completed: boolean } }>();
const todoStore = useTodoStore();

const toggleTodo = () => {
  todoStore.toggleTodo(props.todo.id);
};

const removeTodo = () => {
  todoStore.removeTodo(props.todo.id);
};
</script>
