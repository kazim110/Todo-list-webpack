// import _ from 'lodash';
import './style.css';

const todoArr = [
  {
    id: 1,
    disc: 'wash dishes',
    completed: 'false',
  },
  {
    id: 2,
    disc: 'meeting friends',
    completed: 'false',
  },
  {
    id: 3,
    disc: 'Watching Movie',
    completed: 'false',
  },
  {
    id: 4,
    disc: 'Playing Game',
    completed: 'false',
  },
];

const todoList = document.querySelector('.todo-list');
function todoFunc() {
  todoList.innerHTML += '';
  for (let i = 0; i < todoArr.length; i += 1) {
    todoList.innerHTML += `
        <li>
        <input type="checkbox" id="todo-${i}" name="todo-${i}" value="">
        <label for="todo-${i}"> ${todoArr[i].disc}</label>
        </li>`;
  }
}

function component() {
  return todoFunc();
}

document.body.appendChild(component());