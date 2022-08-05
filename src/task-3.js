import { tasks } from "./tasks.js";
import { showTasks } from "./task-2.js";

const form = document.querySelector('.create-task-block');
form.addEventListener('submit', (event) => {
  // remove default update of page after submit
  event.preventDefault();

  const { target } = event;

  // create new task  
  const newTask = {
    id: Date.now(),
    completed: false,
    text: target.taskName.value
  };

  // add new task to tasks array
  tasks.push(newTask);

  // update tasks list in HTML
  showTasks();
});