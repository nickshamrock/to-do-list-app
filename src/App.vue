<template>
  <main class="flex flex-col items-center gap-6 pb-14 pt-14">
    <h1 class="text-5xl">To-Do List</h1>
    <ToDoInput />
    <ToDoList />
  </main>
</template>

<script setup lang="ts">
import ToDoInput from './components/ToDoInput.vue';
import ToDoList from './components/ToDoList.vue';
</script>
