"use strict";
const deleteTask = (todoList, id) => {
    todoList.removeTask(id);
    renderTodoList(todoList.tasks);
};
