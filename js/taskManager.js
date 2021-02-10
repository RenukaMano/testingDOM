class TaskManager {
    constructor(currentId = 0) {
        this.tasks =[];
        this.currentId = currentId;
    }
    // get tasks() {
    //     return this.tasks;
    // }
    addTask(name, description, assignedTo, email,dueDate, status) {
    // Create a task object that we will push to the list of tasks
    
    const task = {
      // Increment the current Id for each new task
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      email: email,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push({ task });
  }
}

const task1 = new TaskManager();
task1.addTask('study','hghjhjhj', 'deepa', '21/02/2021', 'in-progress')
console.log(task1)
