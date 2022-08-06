import { tasks } from "./tasks.js";
import { showTasks } from "./task-2.js";

// adding confirmation dialog template to DOM
const body = document.querySelector('body');
const deleteModal = document.createElement('div');
deleteModal.classList.add('modal-overlay');
deleteModal.classList.add('modal-overlay_hidden'); {
  const modal = document.createElement('div');
  modal.className = 'delete-modal'; {
    const header = document.createElement('h3');
    header.className = 'delete-modal__question';
    header.innerText = 'Вы действительно хотите удалить эту задачу?';

    const modalButtons = document.createElement('div');
    modalButtons.className = 'delete-modal__buttons'; {
      const btnCancel = document.createElement('button');
      btnCancel.classList.add('delete-modal__button');
      btnCancel.classList.add('delete-modal__cancel-button');
      btnCancel.innerText = 'Отмена';

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('delete-modal__button');
      btnDelete.classList.add('delete-modal__confirm-button');
      btnDelete.innerText = 'Удалить';

      modalButtons.append(btnCancel);
      modalButtons.append(btnDelete);
    }

    modal.append(header);
    modal.append(modalButtons);
  }

  deleteModal.append(modal);
}
body.append(deleteModal);

const taskList = document.querySelector('.tasks-list');
taskList.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('task-item__delete-button')) {
    deleteModal.setAttribute('data-delete-id', target.dataset.deleteTaskId);
    deleteModal.classList.remove('modal-overlay_hidden');
  }
});

const deleteModalCancelButton = deleteModal.querySelector('.delete-modal__cancel-button');
deleteModalCancelButton.addEventListener('click', () => {
  deleteModal.classList.add('modal-overlay_hidden');
  deleteModal.removeAttribute('data-delete-id');
});

const deleteModalDeleteButton = deleteModal.querySelector('.delete-modal__confirm-button');
deleteModalDeleteButton.addEventListener('click', (event) => {
  const indexOfTaskToDelete = tasks.findIndex(task => {
    return task.id === deleteModal.dataset.deleteId;
  });
  if (indexOfTaskToDelete >= 0) {
    tasks.splice(indexOfTaskToDelete, 1);
  }

  showTasks();

  deleteModal.classList.add('modal-overlay_hidden');
  deleteModal.removeAttribute('data-delete-id');
})
