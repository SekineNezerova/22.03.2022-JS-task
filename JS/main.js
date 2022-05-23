"use strict"

let deleteAllTasks=document.querySelector(".delete-tasks")
let taskArea=document.querySelector(".list-group");
let inputTask=document.querySelector(".input");
let addTasks=document.querySelector(".addbtn");



if(localStorage.getItem("Tasks")===null || JSON.parse(localStorage.getItem("Tasks").length ===0)){
    localStorage.setItem("Tasks","[]");
    let li ="<li class='list-group-item items'> No Items </li>";
    taskArea.innerHTML += li;
    deleteAllTasks.classList.add("d-none")
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

document.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        Add();
    }
})
addTasks.addEventListener("click",()=>{
    Add();
})

function Add(){
    if(inputTask.value.length>0 && inputTask.value.trim()!==""){
        let taskelement={
           data:inputTask.value,
           date:dateTime
        }
        inputTask.value="";
        let Tasks=JSON.parse(localStorage.getItem("Tasks"));
        Tasks.push(taskelement);
        localStorage.setItem("Tasks",JSON.stringify(Tasks))
         
        let selectLi=document.querySelectorAll(".items");
        for(let i=0;i<selectLi.length;i++){
            selectLi[i].remove();
        }
        let TaskAdd=JSON.parse(localStorage.getItem("Tasks"));
        for (const tasks of TaskAdd) {
        let newTaskElement="<li class='list-group-item items'> "+tasks.data+" <span class='date'>"+tasks.date+" </span></li>";
        taskArea.innerHTML+=newTaskElement;
         }
        deleteAllTasks.classList.remove("d-none");
    }
    else{
        alert("Invalid");
        inputTask.value="";
    }
}

let TaskAdd=JSON.parse(localStorage.getItem("Tasks"));
for (const tasks of TaskAdd) {
let newTaskElement="<li class='list-group-item items'> "+tasks.data+" <span class='date'>"+tasks.date+" </span></li>";
taskArea.innerHTML+=newTaskElement;
deleteAllTasks.classList.remove("d-none");
}

deleteAllTasks.addEventListener("click",()=>{
    if(window.confirm("Do you want to delete Tasks?")){
        localStorage.removeItem("Tasks");
        location.reload();

    }
    else{
        alert("OK")
    }
})

