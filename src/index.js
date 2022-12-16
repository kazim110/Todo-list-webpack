// import _ from 'lodash';
import './style.css';
import LoadTodos from './modules/LoadTodos.js';
import AddTodos from './modules/Add.js';

const todoInput = document.getElementById('todo-input-id');

window.onload = () => {
  LoadTodos.todoFunc();
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    AddTodos.addTodo();
  }
});
