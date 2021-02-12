const taskManager = new TaskManager(0);

let form = document.querySelector('#taskForm')
let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
let assigned = document.querySelector('#assigned');
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#selectId');
let newStatus = document.querySelector('#menu');
let categoryName = document.querySelector('#category');
let categoryName1
console.log(getName.innerText)
let taskHTML = createTaskHtml('name')
// console.log(taskHTML);

const validFormFieldInput = (data) => {
    if(newTaskNameInput.value.length < 5) {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid')
    } else {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid')
    }
    data.preventDefault();
}
newTaskValue.addEventListener('click', validFormFieldInput); 

// console.log(newTaskNameInput.value)
// console.log(validFormFieldInput())
let assignedTo 
const validDescription = (data) => {
    if(newTaskValue.value.length < 5) {
        newTaskValue.classList.add('is-invalid');
        newTaskValue.classList.remove('is-valid')
    } else {
        newTaskValue.classList.add('is-valid');
        newTaskValue.classList.remove('is-invalid')
    }
    data.preventDefault();
    assignedTo = document.querySelector('#selectId').value;
    console.log(assignedTo)
}
assigned.addEventListener('click', validDescription); 



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







function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };
  newTaskEmail.addEventListener('click', (event) => {
event.preventDefault();
if (emailIsValid(newTaskEmail.value)) {
    newTaskEmail.classList.add('is-valid');
    newTaskEmail.classList.remove('is-invalid');
} else {
    newTaskEmail.classList.add('is-invalid');
    newTaskEmail.classList.remove('is-valid');
        }
    })
// console.log("email:  " + newTaskEmail.value)
// console.log(emailIsValid(newTaskEmail.value))});





// function myFunction() {
//     let selectId = document.getElementById("SelectId.value")
// const validDate = () => {
//     if(newTaskNameInput.value.length < 5) {
//         newTaskNameInput.classList.add('is-invalid');
//         newTaskNameInput.classList.remove('is-valid')
//     } else {
//         newTaskNameInput.classList.add('is-valid');
//         newTaskNameInput.classList.remove('is-invalid')
//     }
//     data.preventDefault();
// }
// newTaskValue.addEventListener('click', validFormFieldInput); 



   // console.log("email:  " + newEmailInput.value)
    //console.log(emailIsValid(newEmailInput.value))
    // console.log("date:  " + newTaskDate.value);

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
    categoryName.addEventListener('click', (event) => {
        event.preventDefault();
        categoryName1 = document.querySelector('#category').value;
        })
        console.log(categoryName1);

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
 
    newStatus.addEventListener('click', (event) => {
    event.preventDefault();
    let Test = comparison(getDate(), newTaskDate.value);
    if (Test) {
        newTaskDate.classList.add('is-valid');
        newTaskDate.classList.remove('is-invalid');
    }
    else {
        newTaskDate.classList.add('is-invalid');
        newTaskDate.classList.remove('is-valid');
            }
    })
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
        //console.log("correcto");
        return true;
    }
    else {
        //console.log("viejo");
        return false;
    }        
    console.log(Test);
}


//    let q = getDate();
//    let m = q.getMonth()+1;
//    var d = q.getDay();
//    var y = q.getFullYear();
   
//    var date = new Date(y,m,d);
   
//    mydate=new Date('2011-04-11');
//    console.log(date);
//    console.log(mydate)
   
//    if(date>mydate)
//    {
//        alert("greater");
//    }
//    else
//    {
//        alert("smaller")
//    }
const clearFormFields = () => {
    newTaskNameInput.value = "";
    newTaskValue.value = "";
    assigned.value = "";
    newTaskEmail.value = "";
    newStatus.value = " ";
    newTaskDate.value = "";
     categoryName ="";
    newTaskNameInput.classList.remove("is-valid");
    newTaskValue.classList.remove("is-valid");
    assigned.classList.remove("is-valid");
    newTaskEmail.classList.remove('is-valid')
    newStatus.classList.remove("is-valid");
    newTaskDate.classList.remove("is-valid");
  };
  form.addEventListener('click', (event) => {
    event.preventDefault();
    taskManager.addTask(
        categoryName1,
        newTaskNameInput.value,
        newTaskValue.value,
        assignedTo,
        newTaskEmail.value,
        newTaskDate.value,
        newStatus.value
        
      );
      console.log(taskManager)
      clearFormFields();
      taskManager.render();
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
//   console.log(taskId)
//    console.log(task)
   task.task.status = "Completed"
   
//    console.log(task)

}
taskManager.render();
});