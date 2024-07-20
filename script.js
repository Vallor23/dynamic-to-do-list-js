// Ensures your JavaScript code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    //Adding new functions to the list
    function addTask(){
        let taskText = taskInput.value.trim();//Retrive and trim the input value from taskInput field then store
    
        // check if taskText is not empty
        if (taskText ==='') {
            alert('Enter a task')
        }else {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');//Adding a class to the button
            removeBtn.addEventListener('click', () => {li.remove()} )//remove li element from tasklist
            //Append removebtn to li element, then li to tasklist
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';//clear the task input
        }
    }
    // Calls addTask when clicked
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event){
        // If the user presses the "Enter" key on the keyboard
        if (event.key === 'Enter'){
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            addButton.click();
        }});
} )