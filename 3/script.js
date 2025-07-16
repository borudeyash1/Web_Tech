const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${task}</span>
            <button class="delete-button">X</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const task = e.target.parentElement;
        if (confirm('Are you sure you want to delete this task?')) {
            task.remove();
        }
    }
});

taskList.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

