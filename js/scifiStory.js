'use strict';

// Dom Windows
let userName = document.getElementById('userName');
// let story = document.getElementById('MadLibs Story');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
// let storyProperties = localStorage.getItem('#### PLACEHOLDER ####');
let parsedName = JSON.parse(savedUserName);
// let parsedStory = JSON.parse(storyProperties);

// Functions;
function renderUserName(){
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

renderUserName();

// function renderStory(event) {
  
// }
