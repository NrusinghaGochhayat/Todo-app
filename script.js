// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim(); // Trim whitespace

    if (taskText !== '') {
        tasks.push({ text: taskText});
        taskInput.value = ''; // Clear input field
        renderTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove task at 'index'
    renderTasks();
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to render tasks in the UI
function renderTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing list

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task.text;
        
        // Add styles based on task completion
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }

        // Add remove button
        let removeBtn = document.createElement('button');
        removeBtn.textContent = '❌';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => removeTask(index);
        li.appendChild(removeBtn);

        // Add toggle button
        let toggleBtn = document.createElement('button');
        toggleBtn.textContent = '✓';
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.onclick = () => toggleTask(index);
        li.appendChild(toggleBtn);

        taskList.appendChild(li);
    });
}
