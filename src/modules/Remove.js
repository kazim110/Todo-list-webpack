/* eslint-disable */
import LoadTodos, { loadedTodos, storageKey } from './LoadTodos.js';

export default class DeleteTodo {
  static deleteTodo(i) {
    loadedTodos.splice(i, 1);
    localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
    LoadTodos.todoFunc();
  }
}