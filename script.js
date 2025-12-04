document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render existing tasks
  tasks.forEach((task) => renderTask(task));

  // CREATE
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask); // render only new task
    todoInput.value = "";
  });

  // RENDER TASK
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    // UPDATE (Toggle Complete)
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) return;

      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // DELETE
    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      li.remove();
    });

    todoList.appendChild(li);
  }

  // SAVE TO LOCAL STORAGE
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
