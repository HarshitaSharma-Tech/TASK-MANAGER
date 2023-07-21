let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnSort = $('#btnSort');
let btnCleanup = $('#btnCleanup');
let inpNewTask = $('#inpNewTask');

function addItem() {
  let taskText = inpNewTask.val().trim();
  if (taskText !== '') {
    let listItem = $('<li>', {
      'class': 'list-group-item',
      text: taskText
    });

    listItem.click(function() {
      $(this).toggleClass('done');
      toggleInputButtons();
    });

    ulTasks.append(listItem);
    inpNewTask.val('');
    toggleInputButtons();
  }
}

function clearDone() {
  ulTasks.find('.done').remove();
  toggleInputButtons();
}

function sortTasks() {
  let doneItems = ulTasks.find('.done').detach();
  ulTasks.append(doneItems);
}

function toggleInputButtons() {
  btnReset.prop('disabled', inpNewTask.val() === '');
  btnAdd.prop('disabled', inpNewTask.val() === '');
  btnSort.prop('disabled', ulTasks.children().length < 1);
  btnCleanup.prop('disabled', ulTasks.children('.done').length < 1);
}

inpNewTask.keypress(function(e) {
  if (e.which === 13) addItem();
});

inpNewTask.on('input', toggleInputButtons);

btnAdd.click(addItem);
btnReset.click(function() {
  inpNewTask.val('');
  toggleInputButtons();
});

btnCleanup.click(clearDone);
btnSort.click(sortTasks);