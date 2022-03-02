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






{/* <p>
        The path was (ADJECTIVE-ONE) but well marked. Streams of moonlight filtered through the leaves of the trees of
        the (PLACE-ONE), illuminating parts of the trail while others remained pitch black. A (PERSON-THREE)'s hut was
        fabled to lie in this (PLACE-ONE), but (NAME-ONE) (VERB-ONE) at these superstitions. They had promised to
        (VERB-TWO) with (PERSON-TWO) that night, but only in the middle of the (PLACE-ONE), at the stroke of midnight.
        As all the other girls in the village were (NOUN-ONE), (PERSON-TWO) had readily agreed.
        As the midnight hour approached, the trail grew (ADJECTIVE-FOUR) and harder to traverse. (PERSON-ONE)
        lit her (NOUN-TWO). They continued onwards, with (PERSON-TWO) ready at any moment, to claim the (NOUN-THREE)
        (PERSON-ONE) had promised. The night grew (ADJECTIVE-TWO), and the (PLACE-ONE) became (ADJECTIVE-THREE) as they
        travelled the path they must.
        Eventually, the path opened up, and they found themselves in a (NOUN-FOUR). A (NOUN-FIVE) in the middle of the
        (PLACE-ONE). The moon shone bright, and there was no mistaking the thatched hut directly in the middle of the
        (NOUN-FIVE).
        “It’s the (PERSON-THREE)’s house,” handsome (PERSON-TWO) said as he examined the hut. “We must (VERB-THREE),
        lest we meet our downfall here.”
        “But you wanted to (VERB-TWO) with me. Wouldn’t it be better on my (FURNITURE), in my house?” (PERSON-TWO)
        replied.
        (PERSON-ONE) turned and stared at (PERSON-TWO). As we all know, (NOUN-SIX) can tell no lies, and in the bright
        moonlight falling within the (PLACE-ONE), (PERSON-TWO) was no longer the most beautiful (NOUN-SEVEN) in the
        village. She had transformed from his dreams of youth and beauty into an old (NOUN-EIGHT) with a long
        walkingstick, surrounded by strange (NOUN-NINE).
        “Don’t you still want to (VERB-TWO) with me, (PERSON-ONE)?” (PERSON-TWO) cackled as she looked deep into their
        eyes. (PERSON-ONE) (VERB-FOUR) softly as (PERSON-TWO) led the helpless fool to her (FURNITURE) and their doom.
      </p> */}