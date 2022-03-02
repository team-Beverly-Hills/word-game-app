'use strict';

// Dom Windows
let userName = document.getElementById('userName');
let storyForm = document.getElementById('storyGen');
let storyGenre = document.getElementById('storySelector');
let genre1 = document.getElementById('genre1');
let genre2 = document.getElementById('genre2');
let genre3 = document.getElementById('genre3');
let genre4 = document.getElementById('genre4');
let genre5 = document.getElementById('genre5');
let genre6 = document.getElementById('genre6');
let genre7 = document.getElementById('genre7');
let genre8 = document.getElementById('genre8');
let genre9 = document.getElementById('genre9');
let genre10 = document.getElementById('genre10');
let genre11 = document.getElementById('genre11');
let genre12 = document.getElementById('genre12');
let genre13 = document.getElementById('genre13');
let genre14 = document.getElementById('genre14');
let genre15 = document.getElementById('genre15');
let genre16 = document.getElementById('genre16');
let genre17 = document.getElementById('genre17');
let genre18 = document.getElementById('genre18');
let genre19 = document.getElementById('genre19');
let genre20 = document.getElementById('genre20');
let genre21 = document.getElementById('genre21');
let genre22 = document.getElementById('genre22');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
let parsedName = JSON.parse(savedUserName);
let savedStories = localStorage.getItem('storyWords');
let parsedStories = JSON.parse(savedStories);

// Functions;
function renderUserName() {
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

/// GLOBAL Variable ///

let stories = [];
let currentGenre = '';

/// OBJ Constructors ///
function Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, storyType = '') {
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
  this.storyType = storyType;

  stories.push(this);
}
if (savedStories) {
  stories = parsedStories;
}

function MadLibsWords(madLib1, madLib2, madLib3, madLib4, madLib5, madLib6, madLib7, madLib8, madLib9, madLib10, madLib11, madLib12, madLib13, madLib14, madLib15, madLib16, madLib17, madLib18, madLib19, madLib20, madLib21, madLib22){
  this.madLib1 = madLib1;
  this.madLib2 = madLib2;
  this.madLib3 = madLib3;
  this.madLib4 = madLib4;
  this.madLib5 = madLib5;
  this.madLib6 = madLib6;
  this.madLib7 = madLib7;
  this.madLib8 = madLib8;
  this.madLib9 = madLib9;
  this.madLib10 = madLib10;
  this.madLib11 = madLib11;
  this.madLib12 = madLib12;
  this.madLib13 = madLib13;
  this.madLib14 = madLib14;
  this.madLib15 = madLib15;
  this.madLib16 = madLib16;
  this.madLib17 = madLib17;
  this.madLib18 = madLib18;
  this.madLib19 = madLib19;
  this.madLib20 = madLib20;
  this.madLib21 = madLib21;
  this.madLib22 = madLib22;
}
let sciFiWords = new MadLibsWords('Generic Place', 'Verb', 'Verb', 'Adjective', 'Thing', 'Adjective', 'Adverb', 'Person Noun(Plural)', 'Verb', 'Capitalized Place', 'Capitalized Place', 'Person Noun(Plural)', 'Adjective that ends in ing', 'Noun', 'Verb', 'Noun', 'Noun', 'Location in House', 'Part of the Body', 'Adjective', 'Food', 'Adjective');
let fantasyWords = new MadLibsWords('Place', 'Adjective', 'Person', 'Name', 'Verb', 'Verb', 'Person', 'Noun', 'Adjective', 'Person', 'Noun', 'Noun', 'Adjective', 'Adjective', 'Place', 'Structure', 'Noun', 'Furniture', 'Song Name', 'Noun', 'Animals', 'Action');
let adventureWords = new MadLibsWords('Name', 'Location', 'Adjective-er', 'Adjective', 'Noun', 'Noun', 'Animal', 'Object', 'Verb-Past Tense', 'Verb', 'Animal Body Part', 'Adjective', 'Family-Member', 'Adjective', 'Verb', 'Verb-Base Form', 'Verb-Past Tense', 'Animal Body Part', 'Part of Body', 'Part of Body', 'Verb', 'Animal Sound');
let actionWords = new MadLibsWords('Adjective', 'Noun', 'City Name', 'onomatopoeia', 'Noun', 'Noun', 'Adjective', 'Verb', 'Adjective', 'Noun', 'Verb', 'Verb', 'Adjective', 'Adverb', 'Adjective', 'Noun', 'Adjective', 'onomatopoeia', 'Noun', 'Noun', 'Adjective', 'Adjective');


// eslint-disable-next-line no-unused-vars
function madLibsLabelGen() {
  if (currentGenre === 'SciFi') {
    genre1.textContent = (`${sciFiWords.madLib1}`);
    genre2.textContent = (`${sciFiWords.madLib2}`);
    genre3.textContent = (`${sciFiWords.madLib3}`);
    genre4.textContent = (`${sciFiWords.madLib4}`);
    genre5.textContent = (`${sciFiWords.madLib5}`);
    genre6.textContent = (`${sciFiWords.madLib6}`);
    genre7.textContent = (`${sciFiWords.madLib7}`);
    genre8.textContent = (`${sciFiWords.madLib8}`);
    genre9.textContent = (`${sciFiWords.madLib9}`);
    genre10.textContent = (`${sciFiWords.madLib10}`);
    genre11.textContent = (`${sciFiWords.madLib11}`);
    genre12.textContent = (`${sciFiWords.madLib12}`);
    genre13.textContent = (`${sciFiWords.madLib13}`);
    genre14.textContent = (`${sciFiWords.madLib14}`);
    genre15.textContent = (`${sciFiWords.madLib15}`);
    genre16.textContent = (`${sciFiWords.madLib16}`);
    genre17.textContent = (`${sciFiWords.madLib17}`);
    genre18.textContent = (`${sciFiWords.madLib18}`);
    genre19.textContent = (`${sciFiWords.madLib19}`);
    genre20.textContent = (`${sciFiWords.madLib20}`);
    genre21.textContent = (`${sciFiWords.madLib21}`);
    genre22.textContent = (`${sciFiWords.madLib22}`);
  } else if (currentGenre === 'Fantasy') {
    genre1.textContent = (`${fantasyWords.madLib1}`);
    genre2.textContent = (`${fantasyWords.madLib2}`);
    genre3.textContent = (`${fantasyWords.madLib3}`);
    genre4.textContent = (`${fantasyWords.madLib4}`);
    genre5.textContent = (`${fantasyWords.madLib5}`);
    genre6.textContent = (`${fantasyWords.madLib6}`);
    genre7.textContent = (`${fantasyWords.madLib7}`);
    genre8.textContent = (`${fantasyWords.madLib8}`);
    genre9.textContent = (`${fantasyWords.madLib9}`);
    genre10.textContent = (`${fantasyWords.madLib10}`);
    genre11.textContent = (`${fantasyWords.madLib11}`);
    genre12.textContent = (`${fantasyWords.madLib12}`);
    genre13.textContent = (`${fantasyWords.madLib13}`);
    genre14.textContent = (`${fantasyWords.madLib14}`);
    genre15.textContent = (`${fantasyWords.madLib15}`);
    genre16.textContent = (`${fantasyWords.madLib16}`);
    genre17.textContent = (`${fantasyWords.madLib17}`);
    genre18.textContent = (`${fantasyWords.madLib18}`);
    genre19.textContent = (`${fantasyWords.madLib119}`);
    genre20.textContent = (`${fantasyWords.madLib20}`);
    genre21.textContent = (`${fantasyWords.madLib21}`);
    genre22.textContent = (`${fantasyWords.madLib22}`);
  } else if (currentGenre === 'Adventure') {
    genre1.textContent = (`${adventureWords.madLib1}`);
    genre2.textContent = (`${adventureWords.madLib2}`);
    genre3.textContent = (`${adventureWords.madLib3}`);
    genre4.textContent = (`${adventureWords.madLib4}`);
    genre5.textContent = (`${adventureWords.madLib5}`);
    genre6.textContent = (`${adventureWords.madLib6}`);
    genre7.textContent = (`${adventureWords.madLib7}`);
    genre8.textContent = (`${adventureWords.madLib8}`);
    genre9.textContent = (`${adventureWords.madLib9}`);
    genre10.textContent = (`${adventureWords.madLib10}`);
    genre11.textContent = (`${adventureWords.madLib11}`);
    genre12.textContent = (`${adventureWords.madLib12}`);
    genre13.textContent = (`${adventureWords.madLib13}`);
    genre14.textContent = (`${adventureWords.madLib14}`);
    genre15.textContent = (`${adventureWords.madLib15}`);
    genre16.textContent = (`${adventureWords.madLib16}`);
    genre17.textContent = (`${adventureWords.madLib17}`);
    genre18.textContent = (`${adventureWords.madLib18}`);
    genre19.textContent = (`${adventureWords.madLib119}`);
    genre20.textContent = (`${adventureWords.madLib20}`);
    genre21.textContent = (`${adventureWords.madLib21}`);
    genre22.textContent = (`${adventureWords.madLib22}`);
  } else if (currentGenre === 'Action') {
    genre1.textContent = (`${actionWords.madLib1}`);
    genre2.textContent = (`${actionWords.madLib2}`);
    genre3.textContent = (`${actionWords.madLib3}`);
    genre4.textContent = (`${actionWords.madLib4}`);
    genre5.textContent = (`${actionWords.madLib5}`);
    genre6.textContent = (`${actionWords.madLib6}`);
    genre7.textContent = (`${actionWords.madLib7}`);
    genre8.textContent = (`${actionWords.madLib8}`);
    genre9.textContent = (`${actionWords.madLib9}`);
    genre10.textContent = (`${actionWords.madLib10}`);
    genre11.textContent = (`${actionWords.madLib11}`);
    genre12.textContent = (`${actionWords.madLib12}`);
    genre13.textContent = (`${actionWords.madLib13}`);
    genre14.textContent = (`${actionWords.madLib14}`);
    genre15.textContent = (`${actionWords.madLib15}`);
    genre16.textContent = (`${actionWords.madLib16}`);
    genre17.textContent = (`${actionWords.madLib17}`);
    genre18.textContent = (`${actionWords.madLib18}`);
    genre19.textContent = (`${actionWords.madLib119}`);
    genre20.textContent = (`${actionWords.madLib20}`);
    genre21.textContent = (`${actionWords.madLib21}`);
    genre22.textContent = (`${actionWords.madLib22}`);
  }
}
// Event Handlers
function handleWordSubmit(event) {
  event.preventDefault();
  let word1 = event.target.word1.value;
  let word2 = event.target.word2.value;
  let word3 = event.target.word3.value;
  let word4 = event.target.word4.value;
  let word5 = event.target.word5.value;
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

  if (currentGenre === 'SciFi') {
    stories[0] = new Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, currentGenre);
  } else if (currentGenre === 'Fantasy') {
    stories[1] = new Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, currentGenre);
  } else if (currentGenre === 'Adventure') {
    stories[2] = new Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, currentGenre);
  } else if (currentGenre === 'Action') {
    stories[3] = new Story(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, currentGenre);
  } else {
    alert('You Must Select a Genre');
  }
  stories.splice(4, 1);
  let localStories = JSON.stringify(stories);
  localStorage.setItem('storyWords', localStories);
  storyForm.reset();
}
function handleGenreSubmit(event) {
  event.preventDefault();
  currentGenre = event.target.genreSelector.value;
  console.log(currentGenre);
  madLibsLabelGen();
}

// Function Calls
renderUserName();

// Event Listeners
storyGenre.addEventListener('submit', handleGenreSubmit);
storyForm.addEventListener('submit', handleWordSubmit);
