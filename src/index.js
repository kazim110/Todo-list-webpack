// import _ from 'lodash';
import './style.css';
import LoadTodos, {storageKey,loadedTodos} from './modules/LoadTodos.js';
import AddTodos from './modules/Add.js';
import CheckboxAction from './modules/Checkbox.js';

const todoInput = document.getElementById('todo-input-id');
const clearAll = document.querySelector('.all-clear-btn');

window.onload = () => {
  localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
  LoadTodos.todoFunc();
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    AddTodos.addTodo();
  }
});

clearAll.addEventListener('click', () => {
  CheckboxAction.removeCompleted();
});