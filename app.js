const input = document.getElementById('enter-task');
const button = document.querySelector('button');
const taskList = document.getElementById('task-list');


function enterTask(){
    if (input.value) {   

        let newTask = document.createElement('div'); 
        newTask.classList.add('task');  

        let text = document.createElement('p'); 
        text.innerText = input.value; 
        newTask.appendChild(text); 
      
        let icons = document.createElement('div');
        icons.classList.add('icons');
        newTask.appendChild(icons); 

        let complete = document.createElement('i'); 
        complete.classList.add('bi', 'bi-check-circle-fill', 'icon-complete');
        complete.addEventListener('click', completeTask);

        let remove = document.createElement('i');
        remove.classList.add('bi', 'bi-trash-fill', 'icon-remove');
        remove.addEventListener('click', removeTask);

        icons.appendChild(complete);
        icons.appendChild(remove);

        taskList.appendChild(newTask);
    } else {
        alert('please enter a task'); 
    }
}

function completeTask(e) {   
    let task = e.target.parentNode.parentNode; 
    task.classList.toggle('task-completed'); 
}

function removeTask(e) {
    let task = e.target.parentNode.parentNode;
    task.remove();
}

button.addEventListener('click', enterTask);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        enterTask();
    }
});