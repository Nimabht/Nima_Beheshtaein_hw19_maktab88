"use strict";
let todoList = TodoList.fromLocalStorage;
console.log();
if (!!todoList) {
    console.log("Todolist loaded");
}
else {
    todoList = new TodoList("todoList", []);
    console.log("New todolist created");
}
renderTodoList(todoList.tasks);
