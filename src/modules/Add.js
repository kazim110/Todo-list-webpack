import Todo from './Todo.js';
import LoadTodos, { loadedTodos, storageKey } from './LoadTodos.js';

const todoInput = document.querySelector('.todo-input');

export default class AddTodos {
  static addTodo() {
    const index = loadedTodos.length + 1;
    const todo = new Todo(index, todoInput.value, false);
    loadedTodos.push(todo);
    localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
    LoadTodos.todoFunc();
    todoInput.value = '';
  }
}