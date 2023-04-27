$("#search-inp").on("keyup",()=>{
     const searchQuery:string=String($("#search-inp").val())
    if(todoList){
        if(searchQuery===""){
            renderTodoList(todoList.tasks)
        }else{
            renderTodoList(todoList.searchTasks(searchQuery))
        }
    }
})
