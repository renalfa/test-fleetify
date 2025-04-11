document.addEventListener("DOMContentLoaded", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let currentFilter = "all";

  const taskList = document.getElementById("task-list");
  const form = document.getElementById("task-form");
  const toggleThemeBtn = document.getElementById("toggle-theme");

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  let dragStartIndex;

  function dragStart(e) {
    dragStartIndex = +e.currentTarget.dataset.index;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    const dragEndIndex = +e.currentTarget.dataset.index;

    const draggedItem = tasks[dragStartIndex];
    tasks.splice(dragStartIndex, 1);
    tasks.splice(dragEndIndex, 0, draggedItem);

    saveTasks();
    renderTasks();
  }

  function addDnDListeners() {
    document.querySelectorAll("#task-list li").forEach((li) => {
      li.addEventListener("dragstart", dragStart);
      li.addEventListener("dragover", dragOver);
      li.addEventListener("drop", drop);
    });
  }

  function renderTasks() {
    taskList.innerHTML = "";

    const emptyState = document.getElementById("empty-state");

    const filtered = tasks.filter((task) => {
      if (currentFilter === "all") return true;
      return currentFilter === "completed" ? task.completed : !task.completed;
    });

    if (filtered.length === 0) {
      emptyState.style.display = "block";
      return;
    } else {
      emptyState.style.display = "none";
    }

    filtered.forEach((task, index) => {
      const li = document.createElement("li");
      li.setAttribute("draggable", "true");
      li.dataset.index = index;
      li.innerHTML = `
        <div class="task ${task.completed ? "completed" : ""} task-actions">
          <input type="checkbox" data-action="toggle" data-index="${index}" ${
        task.completed ? "checked" : ""
      }>
          <span>${task.title}</span>
          <button data-action="edit" data-index="${index}">Edit</button>
          <button data-action="delete" data-index="${index}">Hapus</button>
        </div>
      `;

      li.addEventListener("dragstart", dragStart);
      li.addEventListener("dragover", dragOver);
      li.addEventListener("drop", drop);
      taskList.appendChild(li);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    tasks.push({ title, desc, completed: false });
    form.reset();
    saveTasks();
    renderTasks();
    addDnDListeners();
  });

  taskList.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    const action = e.target.dataset.action;

    if (action === "toggle") {
      tasks[index].completed = !tasks[index].completed;
    } else if (action === "delete") {
      tasks.splice(index, 1);
    } else if (action === "edit") {
      const newTitle = prompt("Edit Judul:", tasks[index].title);
      if (newTitle !== null) tasks[index].title = newTitle;
    }

    saveTasks();
    renderTasks();
  });

  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".filters .active")?.classList.remove("active");
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  toggleThemeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "light" ? "dark" : "light"
    );
  });

  renderTasks();
});
