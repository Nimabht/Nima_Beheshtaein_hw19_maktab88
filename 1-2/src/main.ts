    let todoList:TodoList|null =TodoList.fromLocalStorage

    if(!!todoList){
        console.log("Todolist loaded");
    }
    else{
        todoList=new TodoList("todoList",[])
        console.log("New todolist created");
    }
    renderTodoList(todoList.tasks)