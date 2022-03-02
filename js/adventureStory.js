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
  let adventureStory = ``;
  story.textContent = adventureStory;
  let stringAdventure = JSON.stringify(adventureStory);
  localStorage.setItem('renderedAdventureStory', stringAdventure);
}
renderStory();
