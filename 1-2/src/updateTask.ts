const updateTask=(todoList:TodoList,id:string|number):void=>{
    if(!id){
    //If id doesn't exists it means that we are updating title and description
    let id:string|undefined = $("body").attr("task-id")
    const updatedTitle:string=String($("#update-title-inp").val())
    const updatedDescription:string=String($("#update-description-inp").val())
    todoList.updateTask(Number(id),updatedTitle,updatedDescription)
    renderTodoList(todoList.tasks)
    }else{
    //If id exists it means we want to done or undone the task
        const task:Task|undefined=todoList.getById(id)
        if(task){
            todoList.updateTask(Number(id),task.title,task.description,task.priority,!task.status)
            renderTodoList(todoList.tasks)
        } 
    }
}