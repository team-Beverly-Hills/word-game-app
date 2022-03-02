'use strict';

// Dom Windows
let userName = document.getElementById('userName');
let story = document.getElementById('MadLibs Story');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
let storyProperties = localStorage.getItem('sci-fiStory');
let parsedStory = JSON.parse(storyProperties);
let parsedName = JSON.parse(savedUserName);



// Functions;
function renderUserName(){
  userName.textContent = `Welcome to the Site, ${parsedName}`;
}

renderUserName();

function renderStory(event) {
  story.textContent = `Our story begins in a small ${parsedStory[0].word1} just on the edge of nowhere. If one were to overlook the ${parsedStory[0].word1} they would be able to see evidence of technology usage throughout, buildings that don’t look quite right, craters that have been left as reminders of ${parsedStory[0].word2} gone awry. Of course there are also the good signs; the fields that ${parsedStory[0].word3} themselves, the roads that never seem to get ${parsedStory[0].word4} and the fire pit in the center of town that never seems to die, or need more ${parsedStory[0].word5}. All ${parsedStory[0].word6} features of a ${parsedStory[0].word7} growing, community built town that would look beautiful in it’s harmony.  

  But if you were to ask the ${parsedStory[0].word8} who ${parsedStory[0].word9} in the fields just outside the ${parsedStory[0].word1} about it, they would all inevitably mention the most curious feature of the ${parsedStory[0].word1}; The ${parsedStory[0].word10} upon the ${parsedStory[0].word11}. Every person who lives in the ${parsedStory[0].word1} would be able to talk about it, but it would be in a casual manner of something that just exists as a fact. For anyone who tried to dig deeper about it they would find one rather mundane yet nonetheless curious detail. 
  If you ask the ${parsedStory[0].word8} about it, you would get an assortment of stories that give the impression that the ${parsedStory[0].word12} use the ${parsedStory[0].word10} as the all- ${parsedStory[0].word13}  ${parsedStory[0].word14} to make the ${parsedStory[0].word8} obey them with stories of if they don’t ${parsedStory[0].word15} their ${parsedStory[0].word16} every night, the ${parsedStory[0].word17} who inhabits the ${parsedStory[0].word10} will sneak into your ${parsedStory[0].word18} to cast a spell on your ${parsedStory[0].word19} to make them feel slightly ${parsedStory[0].word20} ; or if you don’t eat all your ${parsedStory[0].word21}, he’ll sneak in while you sleep to turn you into a piece of ${parsedStory[0].word21}, and so on.

  If you were to then go ask the ${parsedStory[0].word12} and other adults about the ${parsedStory[0].word10} they would give a much more mundane answer, simply describing the ${parsedStory[0].word10} and mentioning it was there when they were kids and nothing has ever happened. If you mention the stories they tell their ${parsedStory[0].word8}, they will give a ${parsedStory[0].word22} laugh and explain that it’s what their ${parsedStory[0].word12} told them when they were kids to make them do things.
  A deeper investigation would find that nearly everyone in the ${parsedStory[0].word1} would say the same thing no matter how old or young they were. The ${parsedStory[0].word10} has just always been there.`
}
renderStory();
