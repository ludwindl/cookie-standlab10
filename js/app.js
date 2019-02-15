'use strict';
/*alert('Let\'s play a little trivia about Ludwin. Can you guess the right answers?');

//question 1
var musicAnsw = prompt('Does Ludwin likes 80\'s music?. Y or N?');
console.log(musicAnsw);
if (musicAnsw === 'Y' .toLowerCase()) {
  alert('Very good! Ludwin loves 80\'s music.');
}
else {
  alert('Ludwin loves 80s music. 80s music is super fun.');
}

// question 2
var dessertAnsw = prompt('Does Ludwin likes desserts? Y or N?');
console.log(dessertAnsw);

if (dessertAnsw === 'Y' .toLowerCase()) {
  alert('You are right, especially ice cream. ');
}
else {
  alert('Who doesnt like dessert?. Come on!');
}

// question 3
var gardenAnsw = prompt('Does Likes gardening? Y or N?');
console.log(gardenAnsw);

if (gardenAnsw === 'Y' .toLowerCase()) {
  alert('Gardening is one if his passions, Ludwin especially enjoys working on his bonsai trees.');
}
else {
  alert('Close! Try some gardening is really awesome.');

}

// question 4
var campingAnsw = prompt ('Does Ludwin enjoys camping? Y or N?');
console.log(campingAnsw);

if (campingAnsw === 'Y'.toLowerCase()) {
  alert('Yep. He does, camping is really fun.');
}
else {
  alert ('He does enjoy camping, especially when there is smores');
}

// question 5
var sourdoughAnsw = prompt ('Does Ludwin knows how to make a good sourdough?');
console.log (sourdoughAnsw);

if (sourdoughAnsw === 'Y' .toLowerCase()) {
  alert('Isn\'t that cool? He has been feeding a year old sourdough starter.');
}
else {
  alert('Actually, he is obsessed about sourdough.');
}
// question 6
var number = 1;
var ageGuess = prompt('Can you guess my age? You have five attempts.');
for (var i = 0; i < 4; i++){
  if (ageGuess === '25'){
    number;
    alert ('Correct, you got it in attempt number '+ number);
    break;
  }
  else {
    if (ageGuess < '25'){
      alert('try a higher number');
    }else {
      alert('try a lower number');
    }
  }
  number++;
  ageGuess = prompt ('This is your attempt number: '+ number); 
}*/
//question 7
var colors = ['red', 'blue','yellow'];
var count = 1;
var guessColors = prompt('Great! Now you know me better, can you guess some of my favorite colors?');
for (var i = 0; i < 6; i++){
  if (guessColors === colors.length){
    alert('yes');
    break;
  } else {
    alert('try again');
  }
  count++;
  guessColors = prompt ('this is your attempt number: '+ count);
  }


