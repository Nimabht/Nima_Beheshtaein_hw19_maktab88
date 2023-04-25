const renderTodoList = (tasks:Task[]):void=>{
    $(".task-cards").html("")
   tasks.forEach(task => {
       const dateStr = task.createdAt;
      const date = new Date(dateStr);
      const options:Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      };
    const formattedDate = date.toLocaleDateString('en-US',options);
    const bodyClass=(task.status?"task-card init-bg-success border-1 border-black border rounded shadow p-2":"task-card init-bg-danger border-1 border-black border rounded shadow p-2")
        const statusClass=(task.status?"btn btn-success bi bi-check-lg":"btn btn-danger bi bi-x-lg")
        $(".task-cards").append(`
        <div class="${bodyClass}">
          <p class="display-6 ">${task.title}</p>
          <p class="h5">
            ${task.description}
          </p>
          <small class="d-block mb-3">Created at: ${formattedDate}</small>
          <button class="btn btn-primary bi bi-pencil-fill" data-toggle="modal"
          data-target="#updateModal" id="showUpdateModal" onclick="renderUpdateModal(${task.id})"></button>
          <button class="${statusClass}" onclick="updateTask(todoList,${task.id})"></button>
          <button class="btn btn-danger bi bi-trash-fill" onclick="deleteTask(todoList,${task.id})"></button>
        </div>
        `)
    });
}