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
function renderUserName() {
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

renderUserName();

function renderStory() {
  let adventureStory = `${parsedStory[2].word1} entered the cave, never before had they felt so scared. Yet, they knew all of ${parsedStory[2].word2} was counting on them, so they had to venture forward. As they progressed, they felt as if the cave was getting ${parsedStory[2].word3} and ${parsedStory[2].word3}. When it got too ${parsedStory[2].word4} to see, they lit a ${parsedStory[2].word5} to see what was going on. But as they did, they came face to face with a ${parsedStory[2].word6} breathing ${parsedStory[2].word7}! They realized this was the ${parsedStory[2].word7} that had burnt their hometown of ${parsedStory[2].word2} to the ground, and with that, a spark of vengeance ignited in their soul.
  With that, they drew their trusty ${parsedStory[2].word8} and faced the beast. They ${parsedStory[2].word9} at it with the intent to ${parsedStory[2].word10}! However with a swipe of it's ${parsedStory[2].word11}, it knocked ${parsedStory[2].word1} onto their back. The beast had them in a ${parsedStory[2].word12} position, ${parsedStory[2].word1} felt as if it was the end! But then he remembered what their ${parsedStory[2].word13} had told them; " When you are down, in a ${parsedStory[2].word14} posistion, don't surrender! Let it ${parsedStory[2].word15} your fighting spirit! Never, ever ${parsedStory[2].word16}, my child
  ${parsedStory[2].word1} then saw an opening to attack! They ${parsedStory[2].word17} under the ${parsedStory[2].word7} and got behind it! They then ${parsedStory[2].word18} the beast's ${parsedStory[2].word19} to get on it's ${parsedStory[2].word20}. ${parsedStory[2].word1} then plunged his ${parsedStory[2].word8} into the ${parsedStory[2].word21} of the ${parsedStory[2].word7}, causing it to collapse.
  He stood in front of the fallen ${parsedStory[2].word7}, having won. I will not kill you, you have been through enough. I will give you a chance to ${parsedStory[2].word22} The ${parsedStory[2].word7}, realizing what he was saying, limped off. ${parsedStory[2].word1} stood proud, knowing their hometown of ${parsedStory[2].word2} was safe.`;
  
  story.textContent = adventureStory;
  let stringAdventure = JSON.stringify(adventureStory);
  localStorage.setItem('renderedAdventureStory', stringAdventure);
}
renderStory();
