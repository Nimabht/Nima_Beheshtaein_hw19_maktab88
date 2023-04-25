// Task class definition
class Task {
  public id:number;
  public title: string;
  public description: string;
  public priority: number;
  public createdAt: Date;
  public status: boolean;

  constructor(title: string,description: string, priority: number, createdAt: Date, status: boolean) {
    this.id=Math.random()*(10**17)
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.createdAt = createdAt;
    this.status = status;
  }

  public update(title: string, description: string, priority?: number, status?: boolean) {
    this.title = title;
    this.description = description;
    if(!!priority) this.priority = priority;
    if(!!status) this.status = status;
  }
}

// TodoList class definition
class TodoList {
  public name: string;
  public tasks: Task[];

  constructor(name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
  }

  // Getter method to load data from localStorage
  public static get fromLocalStorage(): TodoList | null {
    const todoListJson = localStorage.getItem('todoList');
    if (!!todoListJson) {
      const todo = JSON.parse(todoListJson);
      return new TodoList(todo.title, todo.tasks);
    }
    return null;
  }

  //Get task by id
  public getById(id:number|string):Task|undefined{
    return this.tasks.find(task=>task.id==id)
  }

  // Setter method to save data to localStorage
  public set toLocalStorage(todoList: TodoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
  
  public addTask(task: Task) {
    this.tasks.push(task);
    // Save the updated list to localStorage
    this.toLocalStorage = this;
  }

  public removeTask(id:number) {
    const index = this.tasks.findIndex(task=>task.id===id);
    if (index!==-1) {
      this.tasks.splice(index, 1);
    }
    // Save the updated list to localStorage
    this.toLocalStorage = this;
  }

public updateTask(id:number,title?:string,description?:string,priority?: number, status?: boolean) {
    const index = this.tasks.findIndex(task=>task.id==id);
    if (index!==-1) {
      if(!!title) this.tasks[index].title=title
      if(!!description) this.tasks[index].description=description
      if(!!priority) this.tasks[index].priority=priority
      if(typeof status!=="undefined") this.tasks[index].status=status
    }
    // Save the updated list to localStorage
    this.toLocalStorage = this;
  }

   public searchTasks(searchString: string): Task[] {
    const matchingTasks: Task[] = [];

    for (const task of this.tasks) {
      if (task.description.toLowerCase().includes(searchString.toLowerCase())||task.title.toLowerCase().includes(searchString.toLowerCase())) {
        matchingTasks.push(task);
      }
    }

    return matchingTasks;
  }

  public removeAllTasks() {
    this.tasks = [];
     // Save the updated list to localStorage
    this.toLocalStorage = this;
  }
}

