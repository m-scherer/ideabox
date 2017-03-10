var $ = require('jquery')

$(document).ready(function() {
  saveHandler();
});

function saveHandler() {
  $('#save-button').on('click', function(){
    saveIdea();
  });
}

function saveIdea() {
  let title = $('#new-title').val();
  let body = $('#new-body').val();

  localStorage.setItem( 'ideas', JSON.stringify(idea(title, body)) );
  clearInputs();
}

function idea(title, body) {
  return { title: title, body: body };
}

function clearInputs() {
  $('#new-title').val('');
  $('#new-body').val('');
}
