const $ = require('jquery');

$(document).ready(function() {
  saveHandler();
});

function saveHandler() {
  $('#save-button').on('click', function(){
    saveIdea();
  });
}

function saveIdea() {
  let ideas = JSON.parse( generateIdeas() );

  localStorage.setItem( 'ideas', JSON.stringify(pushIdea(ideas)) );
  clearInputs();
}

function generateIdeas() {
  let ideasJSON = localStorage.getItem('ideas')

  if (ideasJSON == null) {
    return ideasJSON = '[]';
  } else {
    return ideasJSON;
  }
}

function pushIdea(ideas) {
  let title = $('#new-title').val();
  let body = $('#new-body').val();

  ideas.push(createIdea(title, body));
  return ideas;
}

function createIdea(title, body) {
  return { title: title, body: body };
}

function clearInputs() {
  $('#new-title').val('');
  $('#new-body').val('');
}
