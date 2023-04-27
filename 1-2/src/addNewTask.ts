const addNewTask=(todoList:TodoList)=>{
    const title:string=String($("#title-inp").val())
    const description:string= String($("#description-inp").val())
    const newTask:Task=new Task(title,description,1,new Date,false)
    todoList.addTask(newTask)
    renderTodoList(todoList.tasks)
}