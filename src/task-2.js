import { tasks } from './tasks.js';

showTasks();

export function showTasks() {
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = ''; // clean up list
  tasks.forEach(task => {

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = task.id; {

      const taskItemMainContainer = document.createElement('div');
      taskItemMainContainer.className = 'task-item__main-container'; {

        const taskItemMainContent = document.createElement('div');
        taskItemMainContent.className = 'task-item__main-content'; {

          const form = document.createElement('form');
          form.className = 'checkbox-form'; {

            const input = document.createElement('input');
            input.className = 'checkbox-form__checkbox';
            input.type = 'checkbox';
            input.id = task.id;
            input.checked = task.completed;

            const label = document.createElement('label');
            label.setAttribute('for', task.id);

            form.append(input);
            form.append(label);
          }

          const span = document.createElement('span');
          span.className = 'task-item__text';
          span.textContent = task.text;

          taskItemMainContent.append(form);
          taskItemMainContent.append(span);
        }

        const button = document.createElement('button');
        button.classList.add('task-item__delete-button');
        button.classList.add('default-button');
        button.classList.add('delete-button');
        button.dataset.deleteTaskId = task.id
        button.innerText = 'Удалить';

        taskItemMainContainer.append(taskItemMainContent);
        taskItemMainContainer.append(button);
      }

      taskItem.append(taskItemMainContainer);
    }

    tasksList.append(taskItem);
  })
}
