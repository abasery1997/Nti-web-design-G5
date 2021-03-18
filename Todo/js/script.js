
var form = document.getElementById('myForm')
var tasksCont = document.querySelector('#tasksContainer')

var todos = []

function addTask(taskName , type){
    todo = {
        taskTitle : taskName,
        taskType  : type , 
        status : false
    }
    todos.push(todo)
    console.table(todos)
}

function handleCompletedBTn(i){
    todos[i].status = true;
    showtasks()
}
function handleRemoveBtn(i){
    todos.splice(i , 1)
    showtasks()
}
function handleAction( i , flag){
    (flag == "completed" ) ?   todos[i].status = true :  todos.splice(i , 1);
    showtasks()
}

function showtasks(){
    tasksCont.textContent = "";
    todos.forEach((task , i)=>{
        var div = document.createElement('div')
        var h2 = document.createElement('h2')
        var h4 = document.createElement("h4")
        var completedBtn = document.createElement('button')
        var removeBtn = document.createElement('button')
        h2.textContent = task.taskTitle;
        h4.textContent = task.taskType;
        completedBtn.innerText = "Completed Task";
        removeBtn.innerText = "Remove Task";
        div.append(h2)
        div.append(h4)
        div.append(completedBtn)
        div.append(removeBtn) ;
       (task.status == true) ? div.classList.add('alert' , 'alert-success') : div.classList.add('alert' , 'alert-secondary');
        completedBtn.classList.add('btn' , "btn-success" , "me-2")
        removeBtn.classList.add('btn' , "btn-danger" )
        tasksCont.append(div)

        completedBtn.addEventListener('click' , function(){
            // handleCompletedBTn(i)
            handleAction(i , 'completed')
        })
        removeBtn.addEventListener('click' , function(){
            // handleRemoveBtn(i)
            handleAction(i , 'remove')
        })
    })
}



form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e.target.elements.taskName.value)
    console.log(e.target.elements.taskType.value)
    var task = e.target.elements.taskName.value;
    var type = e.target.elements.taskType.value
    addTask(task , type)
    showtasks()
})