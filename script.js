// Ensures your JavaScript code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    //Function to add new tasks to the list
    function addTask(){
        //Retrive and trim the input value from taskInput field then store
        let taskText = taskInput.value.trim();
    
        // check if taskText is not empty
        if (taskText ==='') {
            alert('Enter a task')
        }else {
            //Create a new list item(li) element
            const li = document.createElement('li');
            li.textContent = taskText;

            //Create a remove button for the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');//Adding a class to the button

            //Add eventlistener to remove task when clicked
            removeBtn.addEventListener('click', () => {
                li.remove()} )//remove li element from tasklist

            //Append removebtn to li element, then append li to tasklist
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            //clear the task input field
            taskInput.value = '';
        }
    }
    // Add eventListener that calls addTask when add button is clicked
    addButton.addEventListener('click', addTask);

    //Add eventlistener to handle "Enter" key when pressed in the textInput field
    taskInput.addEventListener('keypress', function(event){
        // If the user presses the "Enter" key on the keyboard
        if (event.key === 'Enter'){
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            addButton.click();
        }});
} )