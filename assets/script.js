let tasks = [
    { id: 16, description: 'Hacer mercado', completed: true },
    { id: 60, description: 'Estudiar para la prueba', completed: false },
    { id: 24, description: 'Sacar a pasear a Tobby', completed: false },
]

function renderTasks() {
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    tasks.forEach(task => {
        const taskRow = document.createElement('tr')
        taskRow.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.description}</td>
            <td><input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})"></td>
            <td><button class="delete" onclick="deleteTask(${task.id})">✖</button></td>
        `
        taskList.appendChild(taskRow)
    })
    updateTaskCount()
}

function addTask() {
    const taskInput = document.getElementById('taskInput')
    const description = taskInput.value.trim()
    if (description !== '') {
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            description,
            completed: false
        }
        tasks.push(newTask)
        taskInput.value = ''
        renderTasks()
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id)
    renderTasks()
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id)
    if (task) {
        task.completed = !task.completed
        renderTasks()
    }
}

function updateTaskCount() {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.completed).length
    document.getElementById('totalTasks').textContent = totalTasks
    document.getElementById('completedTasks').textContent = completedTasks
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks()
})
