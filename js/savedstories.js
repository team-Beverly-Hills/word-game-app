`use strict`

let story1 = document.getElementById('story1');
let story2 = document.getElementById('story2');
let story3 = document.getElementById('story3');
let story4 = document.getElementById('story4');

// make sure you retrieve stories from local storage
let savedStory1 = localStorage.getItem('renderedSciFiStory');
// let savedStory2 = localStorage.getItem(`renderedAdventureStory`) 
// let savedStory3 = localStorage.getItem(`renderedActionStory`) 
// let savedStory4 = localStorage.getItem(`renderedFantasyStory`) 

let parsedStory1 = JSON.parse(savedStory1);
// let parsedStory2 = JSON.parse(savedStory2)
// let parsedStory3 = JSON.parse(savedStory3)
// let parsedStory4 = JSON.parse(savedStory4)


// create a div and write the text content in it

function storyDiv(event){
  
  let story1content = document.createElement('p');
  story1content.textContent = parsedStory1;
  story1.appendChild(story1content);
  
  let story2content = document.createElement('p');
  story2content.textContent = parsedStory1
  story2.appendChild(story1content);
  
  let story3content = document.createElement('p');
  story3content.textContent = parsedStory1
  story3.appendChild(story1content);
  
  let story4content = document.createElement('p');
  story4content.textContent = parsedStory1
  story4.appendChild(story1content);

}

storyDiv();



















