'use strict';

// Dom Windows
let userName = document.getElementById('userName');
let story = document.getElementById('MadLibs Story');

// localStorage Retrieval
let savedUserName = localStorage.getItem('userName');
let storyProperties = localStorage.getItem('fantasyStory');
let parsedStory = JSON.parse(storyProperties);
let parsedName = JSON.parse(savedUserName);



// Functions;
function renderUserName(){
  userName.textContent = `Welcome to your story, ${parsedName}`;
}

renderUserName();

function renderStory() {
  `${parsedStory[1].word1} Dreams 
      stuff of nightmares`
  `The path was ${parsedStory[1].word2} but well marked. Streams of moonlight filtered through the leaves of the trees of the ${parsedStory[1].word1}, illuminating parts of the trail while others remained pitch black. A ${parsedStory[1].word3}'s hut was fabled to lie in this ${parsedStory[1].word1}, but ${parsedStory[1].word4} ${parsedStory[1].word5} at these superstitions. They had promised to ${parsedStory[1].word6} with ${parsedStory[1].word7} that night, but only in the middle of the ${parsedStory[1].word1}, at the stroke of midnight. As all the other girls in the village were ${parsedStory[1].word8}, ${parsedStory[1].word7} had readily agreed. As the midnight hour approached, the trail grew ${parsedStory[1].word9} and harder to traverse. ${parsedStory[1].word10} lit her ${parsedStory[1].word11}. They continued onwards, with ${parsedStory[1].word7} ready at any moment, to claim the ${parsedStory[1].word12} ${parsedStory[1].word10} had promised. The night grew ${parsedStory[1].word13}, and the ${parsedStory[1].word1} became ${parsedStory[1].word14} as they travelled the path they must. Eventually, the path opened up, and they found themselves in a ${parsedStory[1].word15}. A ${parsedStory[1].word16} in the middle of the ${parsedStory[1].word1}. The moon shone bright, and there was no mistaking the ${parsedStory[1].word16} directly in the middle of the ${parsedStory[1].word17}. “It’s the ${parsedStory[1].word3}’s house,” handsome ${parsedStory[1].word7} said as they examined the place. “We must flee, lest we meet our downfall here.”“But you wanted to ${parsedStory[1].word6} with me. Wouldn’t it be better on my ${parsedStory[1].word18}, in my house?” ${parsedStory[1].word7} replied. ${parsedStory[1].word10} turned and stared at ${parsedStory[1].word7}. As we all know, ${parsedStory[1].word19} can tell no lies, and in the bright moonlight falling within the ${parsedStory[1].word1}, ${parsedStory[1].word7} was no longer the most beautiful ${parsedStory[1].word20} in the village. It had transformed from their dreams of youth and beauty into an old ${parsedStory[1].word3} with a long walkingstick, surrounded by strange ${parsedStory[1].word21}. “Don’t you still want to ${parsedStory[1].word6} with me, ${parsedStory[1].word10}?” ${parsedStory[1].word7} cackled as it looked deep into their eyes. ${parsedStory[1].word10} ${parsedStory[1].word22} softly as ${parsedStory[1].word7} led the helpless fool to it's ${parsedStory[1].word16} and their doom.`

  ` Paul Mansfield
  is a writer, photographer, guitar player, philosopher — some he does well, others not so well. He still tries
  them all. You can follow him on Twitter @pmansfield.
  https://medium.com/microcosm/dark-forest-dreams-a748a99ea8a3`


  
}

renderStory();





