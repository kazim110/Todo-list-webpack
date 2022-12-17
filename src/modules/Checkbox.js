import LoadTodos, { loadedTodos, storageKey } from "./LoadTodos.js";

export default class CheckboxAction {

    constructor() {
        this.toDoList = JSON.parse(localStorage.getItem(storageKey)) || [];
    }

    static checkboxAction(i, action) {
        loadedTodos[i].completed = action;
        localStorage.setItem(storageKey, JSON.stringify(loadedTodos));
    }

    // remove all completed todos
    static removeCompleted() {
        this.toDoList = loadedTodos.filter((task) => task.completed !== true);
        
        localStorage.setItem(storageKey, JSON.stringify(this.toDoList));
        for (let i = 0; i < this.toDoList.length; i += 1) {
            this.toDoList[i].index = i + 1;
        }
        localStorage.setItem(storageKey, JSON.stringify(this.toDoList));
        window.location.reload();
    }
}
