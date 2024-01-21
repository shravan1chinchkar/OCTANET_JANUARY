const taskinput=document.getElementById("taskinput");
const addbutton=document.getElementById("taskbutton");
const tasklistcontainer=document.getElementById("tasklistcontainer");


function addTask(){
    if(taskinput.value==""){
        alert("Please Enter The task");
    }else{
        const task=document.createElement("li");
        task.innerHTML=taskinput.value;
        tasklistcontainer.appendChild(task);
        const deletebutton=document.createElement("div");
        task.appendChild(deletebutton);
    }
    taskinput.value=""
    saveTask();
}
tasklistcontainer.addEventListener("click",function(e){
    // if the li tag is clicked then  the checked class gets applied to that tag
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        console.log(e);
        saveTask();
    }
    // here if the delete button is clicked then that li tag gets removed
    else if(e.target.tagName==="DIV"){
        e.target.parentElement.remove();
        saveTask();
    }
},false)

function saveTask(){
    localStorage.setItem("data",tasklistcontainer.innerHTML);
    console.log(data);
    
}

function showTask(){
    tasklistcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

