'use strict';

// Variables
let userName = '';

// Dom Windows
let nameForm = document.getElementById('nameFormID');

// Functions
function handleSubmit(event){
  event.preventDefault();
  userName = event.target.userName.value;
  nameForm.reset();
  let localStoredName = JSON.stringify(userName);
  localStorage.setItem('userName', localStoredName);
}

// Event Listeners
nameForm.addEventListener('submit', handleSubmit);
