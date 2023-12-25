const tasks = (() => {
  let taskList = [];

  function create(values) {
    let newTask = {
      id: taskList.length,
      title: values.title,
      details: values.details,
      priority: values.priority,
      dueDate: values.dueDate,
      project: values.project,
      status: "pending",
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    taskList.push(newTask);
    return true;
  }

  function edit(task, values, taskIndex) {
    console.log("task edited");
  }

  function verifyTasks(index = null) {
    if (typeof index == "number" && taskList.length <= index)
      throw new Error("No such task found.");
    if (index == null && taskList.length == 0)
      throw new Error("No tasks found.");
  }

  function getList() {
    try {
      verifyTasks();
      return taskList;
    } catch (err) {
      return err;
    }
  }

  function getTask(index) {
    try {
      verifyTasks(index);
      return taskList[index];
    } catch (err) {
      return err;
    }
  }

  return { create, edit, getList, getTask };
})();

export default tasks;
