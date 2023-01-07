import AddTodos from "../modules/Add";
import DeleteTodo from "../modules/Remove";

globa.locaStorage = {
    getItem:jest.fn(),
    setItem:jest.fn(),
    removeItem:jest.fn(),
    clear:jest.fn()
}

it('should call the setItem function of the localStorage object', () => {
    tasks.toDoList = [{ description: 'Task 1', completed: false, index: 0 }];
    global.localStorage.setItem = jest.fn();
    tasks.setLocalStorage();
    expect(global.localStorage.setItem).toHaveBeenCalledWith('AddTodos', JSON.stringify(AddTodos.addTodo));
  });