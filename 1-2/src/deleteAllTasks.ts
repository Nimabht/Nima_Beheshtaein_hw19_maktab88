const deleteAllTasks=():void=>{
    todoList?.removeAllTasks()
    if(todoList){
        renderTodoList(todoList.tasks)
    }
}