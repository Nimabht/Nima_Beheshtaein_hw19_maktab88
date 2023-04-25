"use strict";
$("#search-inp").on("keyup", () => {
    const searchQuery = String($("#search-inp").val());
    if (todoList) {
        if (searchQuery === "") {
            renderTodoList(todoList.tasks);
        }
        else {
            renderTodoList(todoList.searchTasks(searchQuery));
        }
    }
});
