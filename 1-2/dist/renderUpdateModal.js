"use strict";
const renderUpdateModal = (id) => {
    if (!!todoList) {
        const task = todoList.tasks.find((task) => task.id == id);
        if (!!task) {
            $("body").attr("task-id", id);
            $("#update-title-inp").val(task.title);
            $("#update-description-inp").val(task.description);
        }
    }
};
