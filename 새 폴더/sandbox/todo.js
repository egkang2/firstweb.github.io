document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});
function addbutton() {
  const loginButton = document.querySelector(".b4");

  loginButton.addEventListener("click", addTask);
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    const taskText = taskInput.value;

    // Create a new list item
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">삭제</button>`;

    // Add the task to the task list
    taskList.appendChild(li);

    // Save tasks to local storage
    saveTask(taskText);

    // Clear the input field
    taskInput.value = "";
  }
}

function deleteTask(btn) {
  const taskText = btn.parentNode.firstChild.textContent.trim();
  const taskList = document.getElementById("taskList");

  // Remove the task from the task list
  taskList.removeChild(btn.parentNode);

  // Remove the task from local storage
  removeTask(taskText);
}

function saveTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">삭제</button>`;
    taskList.appendChild(li);
  });
}
addbutton();
