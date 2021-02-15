const createTaskHtml =(id, category, name, description, assignedTo, email, dueDate, status, text, visibility, image) => {

const Newcard= `<div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
                <div class="text-center" >  
                     <img class="card-img-top rounded-circle img-fluid" src=${image} alt="Avatar" style="width:20%">
                    </div>
                    <div class="card-body">
                <div class="row justify-content-center">
                    <h6 class="card-title text-uppercase Id">${id}</h6>
                </div>
             <div class="card-body">
                <div class="row justify-content-center">
                    <h6 class="card-title text-uppercase category">${category}</h6>
                </div>
                <div class="row">
                    <div class= "col">
                        <h3 class="card-title text-dark AssignedTo">${assignedTo}</h3>
                    </div>
                    <div class= "col">
                        <h5 class="card-title ${text} Status">${status}</h5>
                    </div>
                    <div class= "col">
                        <h6 class="card-title text-muted Email">${email}</h5>
                    </div>
                </div>
                <br>
                <div class="row justify-content-center">
                    <h4 class="card-title text-right name">${name}</h4>
                </div>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">${dueDate}</small></p>
              </div>
              <div  class="card-footer">
                <a  class="btn btn-outline-success ${visibility} Completed">Mark Completed</a>
                <a  class="btn btn-outline-success ${visibility} ">Edit</a>
              </div>
            </div>
            </div>
          </div>`
          return Newcard;
}


class TaskManager {
    constructor(currentId = 0) {
        this.tasks =[];
        this.currentId = currentId;
    }
    // get tasks() {
    //     return this.tasks;
    // }
    addTask(category, name, description, assignedTo, email,dueDate, status) {
    // Create a task object that we will push to the list of tasks
    
    const task = {
      // Increment the current Id for each new task
      id: this.currentId++,
      category: category,
      name: name,
      description: description,
      assignedTo: assignedTo,
      email: email,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push({ task });  
      
  } 
  
  getTaskByID(taskId) {
    let doneTask;
    this.tasks.forEach(item => {
    let task = item;
    console.log(task);
    if(task.task.id === taskId) {
    doneTask = task}
    
    }); return doneTask;
    }
  
  render () {
    let taskHtmlList = [];
    this.tasks.forEach(task => {
      let currentTask =task;
      // console.log(currentTask);
      // let taskHtml =createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.email,currentTask.dueDate, currentTask.status)
      let visibility;
      let text;
            if(currentTask.task.status === 'Completed' ){
        visibility ='invisible' 
        text = 'text-success'
      }else{  visibility ='visible'
      text = 'text-danger'
    }
    let image;
    if(currentTask.task.assignedTo === 'Deepa'){
      image = 'https://ui-avatars.com/api/?name=D+M'
    }
    else if(currentTask.task.assignedTo === 'Laura') {
      image ='https://ui-avatars.com/api/?name=L+V'
    }
    else { image='https://ui-avatars.com/api/?name=R+M'
  } 

      let taskHtml =createTaskHtml(currentTask.task.id, currentTask.task.category, currentTask.task.name, currentTask.task.description, currentTask.task.assignedTo, currentTask.task.email,currentTask.task.dueDate, currentTask.task.status, text, visibility, image)
      taskHtmlList.push(taskHtml)
      // console.log(currentTask.task.name, currentTask.task.description, currentTask.task.assignedTo, currentTask.task.email,currentTask.task.dueDate, currentTask.task.status)
      
    });
    
    let taskHtml = taskHtmlList.join('\n');
    // console.log(taskHtml);
    let toDoList = document.querySelector('#taskList');
    toDoList.innerHTML = taskHtml;
  }
  save () 
{
  let tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    // console.log(taskJson);
  let currentId = JSON.stringify(this.currentId);
  localStorage.setItem('currentId', currentId);
  console.log(currentId)
}
load(){
  if(localStorage.getItem('tasks'))
    {let tasksJson =localStorage.getItem('tasks')
    this.tasks =JSON.parse(tasksJson)}
    if(localStorage.getItem('currentId'))
    {let currentId =localStorage.getItem('currentId')
    this.currentId =JSON.parse(currentId)}
    
}
// image(name){
//   if(name === 'Deepa'){
//     image = 'https://ui-avatars.com/api/?name=D+M'
//   }
//   else if(name === 'Laura') {
//     image ='https://ui-avatars.com/api/?name=L+V'
//   }
//   else { image='https://ui-avatars.com/api/?name=R+M'
// } return this.image;
// }

clear(){
  this.tasks =[];
  this.currentId =0;
}
}

// const task1 = new TaskManager();
// task1.addTask('study','hghjhjhj', 'deepa', '21/02/2021', 'in-progress')
// console.log(task1)
