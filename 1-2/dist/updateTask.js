"use strict";
const updateTask = (todoList, id) => {
    if (!id) {
        //If id doesn't exists it means that we are updating title and description
        let id = $("body").attr("task-id");
        const updatedTitle = String($("#update-title-inp").val());
        const updatedDescription = String($("#update-description-inp").val());
        todoList.updateTask(Number(id), updatedTitle, updatedDescription);
        renderTodoList(todoList.tasks);
    }
    else {
        //If id exists it means we want to done or undone the task
        const task = todoList.getById(id);
        if (task) {
            todoList.updateTask(Number(id), task.title, task.description, task.priority, !task.status);
            renderTodoList(todoList.tasks);
        }
    }
};
