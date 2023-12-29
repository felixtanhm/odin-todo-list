import "./main.css";
import tasks from "./modules/tasks";

tasks.create(
  {
    title: "values.title",
    details: "values.details",
    priority: "values.priority",
    dueDate: new Date(),
    project: "values.project",
  },
  123
);
console.log(tasks.getList());
console.log(tasks.getTask(2));
