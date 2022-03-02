
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
  let actionStory = `	The year is 1988 and 3 ${parsedStory[3].word1} ${parsedStory[3].word2}s are speeding through traffic on their way to rob a bank in downtown ${parsedStory[3].word3}. ${parsedStory[3].word4}!! goes the getaway car as the 3{parsedStory[3].word2}s arrive at the banks parking lot. Even though they forgot their ${parsedStory[3].word5}, at least they have a bag full of ${parsedStory[3].word6}s to help them distract the guards. The ${parsedStory[3].word2}s barge in, and the ${parsedStory[3].word7} one distracts the guards by ${parsedStory[3].word8}ing in a ridiculous manner with the ${parsedStory[3].word6}. The other two stop in disbelieve, and then the ${parsedStory[3].word9} one rushes the counter and pulls out his ${parsedStory[3].word10} and shouts,
	”This is a stickup! Everybody ${parsedStory[3].word11} or I’m going to use this ${parsedStory[3].word10}”
	The bank was full of people, it was busy and the clerks were busy counting bills and greeting customers. They all stopped. Terrified, everyone, including the security guards got down on their stomachs. 
	“Please, don’t use that ${parsedStory[3].word10}, I have a baby!’’ 
	Said one of the ${parsedStory[3].word2}s. 
	“if you all just stay calm, we won’t ${parsedStory[3].word12} anyone”
The ${parsedStory[3].word13} one then began ${parsedStory[3].word14} stashing all of the money into bags with a ${parsedStory[3].word15} grin on his face. Going from teller to teller, the ${parsedStory[3].word2}s gathered their loot, leaving a trail of ${parsedStory[3].word16}s behind. 
	“Thank you for your patience, we are leaving now!”
The 3 ${parsedStory[3].word2}s dashed out of the bank leaving nothing behind except the bag of ${parsedStory[3].word6}. Darting through the ${parsedStory[3].word17} streets of ${parsedStory[3].word13}, they are sure that it was a job well done.
	{parsedStory[3].word18}!!! The {parsedStory[3].word2}s were crushed by a ${parsedStory[3].word19}. Oh no!! Not the ${parsedStory[3].word20}s!!! Who would of thought after all of this time the ${parsedStory[3].word20}s would be able to foil the {parsedStory[3].word2}’s plans. All it took to track them down was for the ${parsedStory[3].word20}s to find the bag of ${parsedStory[3].word6} in order to track the {parsedStory[3].word2}s. 
	The moral of this story, is don’t be a ${parsedStory[3].word21} ${parsedStory[3].word2} or you will be stopped by a ${parsedStory[3].word20}. Have a ${parsedStory[3].word22} day!`;
  story.textContent = actionStory;
  let stringAction = JSON.stringify(actionStory);
  localStorage.setItem('renderedActionStory', stringAction);
}
renderStory();
