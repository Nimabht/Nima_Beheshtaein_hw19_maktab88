const deleteTask = (todoList:TodoList,id:number):void=>{
    todoList.removeTask(id)
    renderTodoList(todoList.tasks)
}