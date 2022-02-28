'use strict';

// Variables
let userName = '';

// Dom Windows
let nameForm = document.getElementById('');

// Functions
function handleSubmit(event) {
  event.preventDefault();
  userName = event.target.userName.value;
  let localStoredName = JSON.stringify(userName);
  localStorage.setItem('userName', localStoredName);
}

// Event Listeners
nameForm.addEventListener('submit', handleSubmit);
