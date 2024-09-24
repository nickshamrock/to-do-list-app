import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);

  const loadTodos = () => {
    const keys = Object.keys(localStorage).filter((key) => key.startsWith('todo-'));
    todos.value = keys.map((key) => {
      const todo = localStorage.getItem(key);
      return todo ? JSON.parse(todo) : { id: 0, text: '', completed: false };
    });

    sortTodos();
  };

  const saveTodo = (todo: Todo) => {
    localStorage.setItem(`todo-${todo.id}`, JSON.stringify(todo));
  };

  const removeTodoFromStorage = (id: number) => {
    localStorage.removeItem(`todo-${id}`);
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    todos.value.push(newTodo);
    saveTodo(newTodo);
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      saveTodo(todo);
    }
  };

  const removeTodo = (id: number) => {
    const index = todos.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
      removeTodoFromStorage(id);
    }
  };

  const sortTodos = () => {
    todos.value.sort((a, b) => a.id - b.id);
  };

  loadTodos();

  return { todos, addTodo, toggleTodo, removeTodo };
});
