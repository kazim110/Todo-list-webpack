/* eslint-disable */
import LoadTodos, { loadedTodos, storageKey } from './LoadTodos.js';

export default class DeleteTodo {
  static deleteTodo(i) {
    loadedTodos.splice(i, 1);
    for(let i = 0; i < loadedTodos.length; i+=1){
      loadedTodos[i].index = i+1
    }
    localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
    LoadTodos.todoFunc();
  }
}