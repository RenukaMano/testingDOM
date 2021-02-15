
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();


let form = document.querySelector('#taskForm')
let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
// let assigned = document.querySelector('#assigned');
let assignedTo;
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#selectId');
let newStatus = document.querySelector('#menu');

let newStatus1;
let categoryName = document.querySelector('#category');
let clearTask = document.querySelector('#clearTask');
let validationFail =0;

let categoryName1
console.log(getName.innerText)
let taskHTML = createTaskHtml('name')

const validCategory = (data) => {
    //  newCategory = document.querySelector('#category1').value;
    if(categoryName.value === 'Select') {
        categoryName.classList.add('is-invalid');
        categoryName.classList.remove('is-valid')
        validationFail++;
        
    } else {
        categoryName.classList.add('is-valid');
        categoryName.classList.remove('is-invalid')
        newCategory = document.querySelector('#category').value;
        
    }
 
    data.preventDefault();
}
form.addEventListener('click', validCategory); 


// const validFormFieldInput = (data) => {
//     if(newTaskNameInput.value.length < 5) {
//         newTaskNameInput.classList.add('is-invalid');
//         newTaskNameInput.classList.remove('is-valid')
//         validationFail++;
//     } else {
//         newTaskNameInput.classList.add('is-valid');
//         newTaskNameInput.classList.remove('is-invalid')
//     }
//     data.preventDefault();
// }
// newTaskValue.addEventListener('click', validFormFieldInput); 

// console.log(newTaskNameInput.value)
// console.log(validFormFieldInput())
// let assignedTo 

const validAssignedTo = (data) => {
    
    if(getName.value === 'Select') {
        getName.classList.add('is-invalid');
       getName.classList.remove('is-valid')
        validationFail++;
      
    } else {
        getName.classList.add('is-valid');
        getName.classList.remove('is-invalid')
        assignedTo = document.querySelector('#selectId').value;
        
    }
 
    data.preventDefault();
}
form.addEventListener('click', validAssignedTo); 



// const validEmail = (data) => {
//     if(newTaskEmail.value.length < 5) {
//         newTaskEmail.classList.add('is-invalid');
//         newTaskEmail.classList.remove('is-valid')
//     } else {
       
//         newTaskEmail.classList.add('is-valid');
//         newTaskEmail.classList.remove('is-invalid')
//     }
//     data.preventDefault();
// }
// newTaskDate.addEventListener('click', validEmail); 

const validFormFieldInput = (data) => {
    if(newTaskNameInput.value.length < 5) {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid')
        validationFail++;
        console.log(validationFail)
    } else {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid')
    }
    data.preventDefault();
}
form.addEventListener('click', validFormFieldInput); 


const validDescription = (data) => {
    if(newTaskValue.value.length < 5) {
        newTaskValue.classList.add('is-invalid');
        newTaskValue.classList.remove('is-valid')
        validationFail++;
    } else {
        newTaskValue.classList.add('is-valid');
        newTaskValue.classList.remove('is-invalid')
    }
    data.preventDefault();
    assignedTo = document.querySelector("#selectId").value
}
form.addEventListener('click', validDescription); 







function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };
  
form.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailIsValid(newTaskEmail.value)) {
        newTaskEmail.classList.add('is-valid');
        newTaskEmail.classList.remove('is-invalid');
    } 
    else {
    newTaskEmail.classList.add('is-invalid');
    newTaskEmail.classList.remove('is-valid');
    validationFail++;
    }
});

    getName.addEventListener('click', (data) => {
        data.preventDefault();
        let selectedData = data;
       for (var i = 0; i < getName.length; i++) {
                if (getName[i].text== selectedData) {
                    selectObj.options[i].selected = true;
                    return getName[i].text;
                }
            }
        })





    const getDate = () => {
   let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
   return today;
    }

    //category selection:
    // categoryName.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     categoryName1 = document.querySelector('#category').value;
    //     })
    //     console.log(categoryName1);

    // function myFunction() {
    //     categorys = document.querySelector("#category").value;
    //     console.log(categorys)
        
    //   }
    //   categorys.addEventListener('click', myFunction)
    

    // $('category').click(function() {
    //     $(this).parent().data('value', $(this).data('value')); 
    //   }); $('category').data('value');
//     let listHandler = new Object();
//  listHandler.getAllValues = function (categoryList)
// {
//     let categoryValues = [];
//     for (var i =1; i<categoryList.options.length; i++) {
//         categoryValues.push(categoryList.options[i].value);
//     }
// }


// console.log(getDate())
form.addEventListener('click', (event) => {
    event.preventDefault();
    let Test = comparison(getDate(), newTaskDate.value);
    if (Test) {
        newTaskDate.classList.add('is-valid');
        newTaskDate.classList.remove('is-invalid');
        
    }
    else {
        newTaskDate.classList.add('is-invalid');
        newTaskDate.classList.remove('is-valid');
        validationFail++;
    }
});

function gettheDate(date) {
    if (date.select) {
      $('#date').pickadate().pickadate('picker').close();
    }
  }

//   const newDate = (date) => {
//       let d1 = newTaskDate.value;
//       let d2 = getDate(date);
//       console.log(d1)
//       if(d1 !== "" && d1 > d2) {
//           return date;
//           } else {
//               return 'invalid date'
//           }
//       }
//       newStatus.addEventListener('click', newDate)

    //   newStatus.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (newTaskDate.value) {
    //         newTaskDate.classList.add('is-valid');
    //         newTaskDate.classList.remove('is-invalid');
    //         if (newTaskDate.value > getDate(date)) {
    //             return date
    //         }      
    //     else {
    //         newTaskDate.classList.add('is-invalid');
    //         newTaskDate.classList.remove('is-valid');    
    //     }
    //     console.log(newTaskDate.value)
    //     }
    // })


    //   newStatus.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (d1.value && d1.value > d2) {
    //         d1.classList.add('is-valid');
    //         d1.classList.remove('is-invalid');
    //     }
    //     else {
    //         d1.classList.add('is-invalid');
    //         d1.classList.remove('is-valid');    
    //     }
    //     console.log(d1.value)
        
    // })
    // $(document).ready(function(){
    //     $("Mark Completed").click(function(){
    //       $("taskList").remove();
    //     });
    //   });
 
    // newStatus.addEventListener('click', (event) => {
    // event.preventDefault();
    // let Test = comparison(getDate(), newTaskDate.value);
    // if (Test) {
    //     newTaskDate.classList.add('is-valid');
    //     newTaskDate.classList.remove('is-invalid');
    // }
    // else {
    //     newTaskDate.classList.add('is-invalid');
    //     newTaskDate.classList.remove('is-valid');
    //         }
    // })

    const validStatus = (data) => {
    
        if(newStatus.value === 'Select') {
            newStatus.classList.add('is-invalid');
            newStatus.classList.remove('is-valid')
            validationFail++;
          
        } else {
            newStatus.classList.add('is-valid');
            newStatus.classList.remove('is-invalid')
            newStatus1 = document.querySelector('#menu').value;
            
        }
     
        data.preventDefault();
    }
    form.addEventListener('click', validStatus); 
//this function is to get the date of today            
// const getDate = () => {
//     let today = new Date();
//         let dd = String(today.getDate()).padStart(2, '0');
//         let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//         let yyyy = today.getFullYear();
//         today = yyyy + '-' + mm + '-' + dd;
//     return today;
//         }
//this function compare the date of today with the input date
const comparison = (today, newTaskDate) => {
    if(newTaskDate >= today) {
        
        return true;
    }
    else {
       
        return false;
    }        
    console.log(Test);
}



const clearFormFields = () => {
    newTaskNameInput.value = "";
    newTaskValue.value = "";
    assigned.value = "Select";
    newTaskEmail.value = "";
    newStatus.value = "Select ";
    newTaskDate.value = "";
     categoryName.value="Select";
    newTaskNameInput.classList.remove("is-valid");
    newTaskValue.classList.remove("is-valid");
    assigned.classList.remove("is-valid");
    newTaskEmail.classList.remove('is-valid')
    newStatus.classList.remove("is-valid");
    newTaskDate.classList.remove("is-valid");
    categoryName.classList.remove("is-valid");
  };
  form.addEventListener('click', (event) => {
    event.preventDefault();
    if(validationFail===0){
    taskManager.addTask(
        newCategory,
        newTaskNameInput.value,
        newTaskValue.value,
        assignedTo,
        newTaskEmail.value,
        newTaskDate.value,
        newStatus1
        
      );
      console.log(taskManager)
      clearFormFields();
      taskManager.render();
      taskManager.save();
    } else{validationFail = 0;
    return;}
}
  );


let markComplete = document.querySelector("#taskList");
    markComplete.addEventListener("click",  (event) => {
        if(event.target.classList.contains("Completed")){
            // console.log(event.target.parentElement.parentElement.parentElement)
            event.preventDefault();
            const childElement = event.target.parentElement.parentElement;
            const parentTask = childElement.parentElement;
            // parentTask.removeChild(childElement);
        
    // this.taskList.style.display = 'none';
    // console.log('hi');
  
    // console.log(parentTask)
//   let taskId = parentTask.querySelector('.Id');
  let taskId = Number(parentTask.querySelector('.Id').innerText);
  console.log(taskId)
  let task = taskManager.getTaskByID(taskId) 
   task.task.status = "Completed"
   }
taskManager.render();

});

clearTask.addEventListener('click', () =>{
    localStorage.clear();
    taskManager.clear();
    taskManager.render();
});