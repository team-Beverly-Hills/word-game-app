'use strict';

// Dom Windows
let userName = document.getElementById('userName');
let storyForm = document.getElementById('storyGen');

let scifidd = document.getElementById('ddScifi');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
let parsedName = JSON.parse(savedUserName);

// Functions;
function renderUserName(){
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

/// GLOBAL Variable ///

let stories = [];

/// OBJ Constructor ///
// let scifiStory =
function Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22){
  this.word1 = word1;
  this.word2 = word2;
  this.word3 = word3;
  this.word4 = word4;
  this.word5 = word5;
  this.word6 = word6;
  this.word7 = word7;
  this.word8 = word8;
  this.word9 = word9;
  this.word10 = word10;
  this.word11 = word11;
  this.word12 = word12;
  this.word13 = word13;
  this.word14 = word14;
  this.word15 = word15;
  this.word16 = word16;
  this.word17 = word17;
  this.word18 = word18;
  this.word19 = word19;
  this.word20 = word20;
  this.word21 = word21;
  this.word22 = word22;

  stories.push(this);
}

function handleSubmit(event){
  event.preventDefault();
  let word1 = event.target.word1.value;
  let word2 = event.target.word2.value;
  let word3 = event.target.word3.value;
  let word4 = event.target.word4.value;
  let word5 =  event.target.word5.value;
  let word6 = event.target.word6.value;
  let word7 = event.target.word7.value;
  let word8 = event.target.word8.value;
  let word9 = event.target.word9.value;
  let word10 = event.target.word10.value;
  let word11 = event.target.word11.value;
  let word12 = event.target.word12.value;
  let word13 = event.target.word13.value;
  let word14 = event.target.word14.value;
  let word15 = event.target.word15.value;
  let word16 = event.target.word16.value;
  let word17 = event.target.word17.value;
  let word18 = event.target.word18.value;
  let word19 = event.target.word19.value;
  let word20 = event.target.word20.value;
  let word21 = event.target.word21.value;
  let word22 = event.target.word22.value;

  new Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22);

  let localStories = JSON.stringify(stories);
  localStorage.setItem('storyWords', localStories);
  storyForm.reset();
}
renderUserName();
storyForm.addEventListener('submit', handleSubmit);
