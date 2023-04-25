"use strict";
const deleteAllTasks = () => {
    todoList?.removeAllTasks();
    if (todoList) {
        renderTodoList(todoList.tasks);
    }
};
