const render = (() => {
  const taskContainer = document.getElementById("task-container");
  const currentSelection = document.getElementById("current-selection");
  const projContainer = document.getElementById("proj-container");

  function task(task) {
    const markDone = () => {};
    const openEdit = () => {};
    const viewDetails = () => {};

    // Create elements
    const newTask = document.createElement("div");
    const taskLeft = document.createElement("div");
    const taskRight = document.createElement("div");
    const checkbox = document.createElement("span");
    const taskContent = document.createElement("div");
    const subContent = document.createElement("div");
    const priorityChip = document.createElement("div");
    const dateChip = document.createElement("div");
    const title = document.createElement("h3");
    const viewButton = document.createElement("button");
    const editButton = document.createElement("button");

    // Update element contents
    checkbox.textContent = "check_box_outline_blank";
    title.textContent = task.title;
    priorityChip.textContent = task.priority;
    dateChip.textContent = task.dueDate;
    viewButton.textContent = "View";
    editButton.textContent = "Edit";

    // Update element classes
    newTask.classList.add("task");
    checkbox.classList.add("material-symbols-rounded");
    taskContent.classList.add("task-content");
    subContent.classList.add("sub-content");
    priorityChip.classList.add("chip", "priority", task.priority);
    dateChip.classList.add("chip", "due-date");
    editButton.classList.add("btn-secondary");
    viewButton.classList.add("btn-primary");

    // Add event listeners
    checkbox.addEventListener("click", () => {});
    editButton.addEventListener("click", () => {});
    viewButton.addEventListener("click", () => {});

    // Construct elements
    subContent.appendChild(priorityChip);
    subContent.appendChild(dateChip);

    taskContent.appendChild(subContent);
    taskContent.appendChild(title);

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(taskContent);

    taskRight.appendChild(editButton);
    taskRight.appendChild(viewButton);

    newTask.appendChild(taskLeft);
    newTask.appendChild(taskRight);

    taskContainer.appendChild(newTask);
  }

  return { task };
})();

export default render;
