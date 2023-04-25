const addNewTask=(todoList:TodoList)=>{
    const title=String($("#title-inp").val())
    const description= String($("#description-inp").val())
    const newTask=new Task(title,description,1,new Date,false)
    todoList.addTask(newTask)
    renderTodoList(todoList.tasks)
}