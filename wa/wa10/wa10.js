//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText= "It was 94 fahrenheit outside, so the :insertx: went for a swim. When he :inserty: into the ocean, he got scared. The :insertx: saw Bob dancing with a :insertz:. The fish saw the whole thing, but was not surprised — Bob weighs 300 pounds, and she have shpilkes."
const insertx = ["duck","farmer","goblin"]
const inserty = ["jumped","canon balled","dove","walked","crawled"]

const insert2= ["hula hoop","basketball"]

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insert2);

    newStory = newStory.replaceAll(':insertx:',xItem).replace(':inserty:', yItem,).replace(":insertz:",zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32) * (5/9)) + " centigrade";

    newStory = newStory.replace("300",weight);
    newStory = newStory.replace('94 fahrenheit',temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
