import Todo from './Todo.js';
import LoadTodos, { loadedTodos, storageKey } from './LoadTodos.js';

const todoInput = document.querySelector('.todo-input');

export default class AddTodos {
  static addTodo() {
    const todo = new Todo(todoInput.value, false);
    loadedTodos.push(todo);
    localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
    LoadTodos.todoFunc();
    todoInput.value = '';
  }
}