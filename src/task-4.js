import { tasks } from "./tasks.js";

/**
 * Validate input from form. Check it and add a message if smth goeas wrong.
 * @param {*} taskName Text of new task
 * @returns True if all right otherwise false.
 */
export function isInputValid(taskName) {
  let message = '';

  if (taskName) {
    // check the existance of this task
    const findTask = tasks.find(task => {
      return task.text === taskName;
    })
    if (findTask)
      message = 'Задача с таким названием уже существует.';
  }
  else {
    message = 'Название задачи не должно быть пустым';
  }

  let isValid = !Boolean(message);

  const form = document.querySelector('.create-task-block');
  let err = form.querySelector('.error-message-block');
  if (message) { // add error message to HTML
    if (err) { // change message to actual
      err.innerText = message;
    }
    else { // create error message
      err = document.createElement('span');
      err.className = 'error-message-block';
      err.innerText = message;
      form.append(err);
    }
  }
  else { // remove old error message
    err?.remove();
  }

  return isValid;
}