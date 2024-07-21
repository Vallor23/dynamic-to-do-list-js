// Ensures your JavaScript code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

        // Initialize tasks (load from localStorage)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

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

                // Update tasks array and save to localStorage
                const updatedTasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            //Append removebtn to li element, then append li to tasklist
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            //clear the task input field
            taskInput.value = '';

            // Update tasks array and save to localStorage
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
    // Load tasks on page load
    function loadTasks() {
        tasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', () => {
                li.remove();
                const updatedTasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            });
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
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
} );
// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);