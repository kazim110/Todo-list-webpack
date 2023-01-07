/* eslint-disable */
import DeleteTodo from './Remove.js';
import Todo from './Todo.js';
import CheckboxAction from './Checkbox.js';

export const storageKey = 'todoLocalData';
export const loadedTodos = JSON.parse(localStorage.getItem(storageKey)) || null;

const todoList = document.querySelector('.todo-list');

export default class LoadTodos {
  static todoFunc() {
    todoList.innerHTML = '';
    if(loadedTodos !== null){
      for (let i = 0; i < loadedTodos.length; i += 1) {
        todoList.innerHTML += `
                <li>
                <div>
                <input class="edite-input hide" type="text" id="edit-input-id" name="edit">
                <input class="checkbox show" type="checkbox" id="todo-${i}" name="todo-${i}" value="">
                <label class="checkbox-label show" for="todo-${i}"> ${loadedTodos[i].disc}</label>
                </div>
                <div class="todo-menu">
                <i class='fa fa-ellipsis-v three-dot show'></i>
                <i class="fa fa-wrench edite hide" aria-hidden="true"></i>
                <i class="fa fa-trash trash hide" aria-hidden="true"></i>
                <i class="fa fa-times close hide" aria-hidden="true"></i>
                </div>
                </li>`;
      }
    }else{
      const todo1 = new Todo(1,'Reading Books',false);
      localStorage.setItem(storageKey, JSON.stringify(todo1));
    }
   
    const checkBox = document.querySelectorAll('.checkbox');
    const checkboxLabel = document.querySelectorAll('.checkbox-label');
    const editInput = document.querySelectorAll('.edite-input');
    const todomenu = document.querySelectorAll('.three-dot');
    const todoClose = document.querySelectorAll('.close');
    const todoEdite = document.querySelectorAll('.edite');
    const todoTrash = document.querySelectorAll('.trash');
    for (let a = 0; a < loadedTodos.length; a += 1) {
      todomenu[a].addEventListener('click', () => {
        todomenu[a].classList.replace('show', 'hide');
        todoClose[a].classList.replace('hide', 'show');
        todoEdite[a].classList.replace('hide', 'show');
        todoTrash[a].classList.replace('hide', 'show');
      });
    }

    for (let a = 0; a < loadedTodos.length; a += 1) {
      todoClose[a].addEventListener('click', () => {
        todomenu[a].classList.replace('hide', 'show');
        todoClose[a].classList.replace('show', 'hide');
        todoEdite[a].classList.replace('show', 'hide');
        todoTrash[a].classList.replace('show', 'hide');
        checkBox[a].classList.replace('hide', 'show');
        checkboxLabel[a].classList.replace('hide', 'show');
        editInput[a].classList.replace('show', 'hide');
      });
    }
    for (let a = 0; a < loadedTodos.length; a += 1) {
      todoTrash[a].addEventListener('click', () => {
        DeleteTodo.deleteTodo(a);
      });
    }

    for (let a = 0; a < loadedTodos.length; a += 1) {
      todoEdite[a].addEventListener('click', () => {
        todoEdite[a].classList.replace('show', 'hide');
        todoTrash[a].classList.replace('show', 'hide');
        checkBox[a].classList.replace('show', 'hide');
        checkboxLabel[a].classList.replace('show', 'hide');
        editInput[a].classList.replace('hide', 'show');

        editInput[a].value = loadedTodos[a].disc;
      });
    }

    for (let a = 0; a < loadedTodos.length; a += 1) {
      editInput[a].addEventListener('keypress', (e) => {
        if (editInput[a].value && e.key === 'Enter') {
          const todo = new Todo(a+1,editInput[a].value, false);
          loadedTodos[a] = todo;
          localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
          LoadTodos.todoFunc();
          editInput[a].value = '';
          editInput[a].classList.replace('show', 'hide');
          checkBox[a].classList.replace('hide', 'show');
          checkboxLabel[a].classList.replace('hide', 'show');
        }
      });
    }

    const checkboxInput = document.querySelectorAll('.checkbox');
    const checkLabel = document.querySelectorAll('.checkbox-label');
    
    for(let a = 0; a<loadedTodos.length;a +=1){
      checkboxInput[a].addEventListener('change', () => {
        if (checkboxInput[a].checked) {
          checkLabel[a].classList.add('line-over');
          CheckboxAction.checkboxAction(a,true);
        }else {
          checkLabel[a].classList.remove('line-over');
          CheckboxAction.checkboxAction(a,false);
        }
        
      });
    }
  }
}