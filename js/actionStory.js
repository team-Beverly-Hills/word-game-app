
'use strict';

// Dom Windows
let userName = document.getElementById('userName');
let story = document.getElementById('MadLibs Story');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
let storyProperties = localStorage.getItem('storyWords');
let parsedStory = JSON.parse(storyProperties);
let parsedName = JSON.parse(savedUserName);



// Functions;
function renderUserName(){
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

renderUserName();

function renderStory() {
  let actionStory = ``;
  story.textContent = actionStory;
  let stringAction = JSON.stringify(actionStory);
  localStorage.setItem('renderedActionStory', stringAction);
}
renderStory();
