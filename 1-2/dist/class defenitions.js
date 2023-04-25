"use strict";
// Task class definition
class Task {
    constructor(title, description, priority, createdAt, status) {
        this.id = Math.random() * (10 ** 17);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.createdAt = createdAt;
        this.status = status;
    }
    update(title, description, priority, status) {
        this.title = title;
        this.description = description;
        if (!!priority)
            this.priority = priority;
        if (!!status)
            this.status = status;
    }
}
// TodoList class definition
class TodoList {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    // Getter method to load data from localStorage
    static get fromLocalStorage() {
        const todoListJson = localStorage.getItem('todoList');
        if (!!todoListJson) {
            const todo = JSON.parse(todoListJson);
            return new TodoList(todo.title, todo.tasks);
        }
        return null;
    }
    //Get task by id
    getById(id) {
        return this.tasks.find(task => task.id == id);
    }
    // Setter method to save data to localStorage
    set toLocalStorage(todoList) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    addTask(task) {
        this.tasks.push(task);
        // Save the updated list to localStorage
        this.toLocalStorage = this;
    }
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        // Save the updated list to localStorage
        this.toLocalStorage = this;
    }
    updateTask(id, title, description, priority, status) {
        const index = this.tasks.findIndex(task => task.id == id);
        if (index !== -1) {
            if (!!title)
                this.tasks[index].title = title;
            if (!!description)
                this.tasks[index].description = description;
            if (!!priority)
                this.tasks[index].priority = priority;
            if (typeof status !== "undefined")
                this.tasks[index].status = status;
        }
        // Save the updated list to localStorage
        this.toLocalStorage = this;
    }
    searchTasks(searchString) {
        const matchingTasks = [];
        for (const task of this.tasks) {
            if (task.description.toLowerCase().includes(searchString.toLowerCase()) || task.title.toLowerCase().includes(searchString.toLowerCase())) {
                matchingTasks.push(task);
            }
        }
        return matchingTasks;
    }
    removeAllTasks() {
        this.tasks = [];
        // Save the updated list to localStorage
        this.toLocalStorage = this;
    }
}
