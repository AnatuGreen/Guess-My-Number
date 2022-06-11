'use strict';

document.querySelector('.between').textContent =
  'Enter a number Between 1 & 20';

document.querySelector('.message').textContent = 'Your entry is...';

//DOM: Document Object model. It is a structured representatioon of a HTML document that allows us to access the HTML elements that are connected to our javascript and to manipulate or style it
//The DOM tree contains everthing in the html file from the html tag.

//The DOM is auto created by the browser as soon as the html loads in a browser and stored in a tree structure. The terms parent, child, sibling elements etc when referring to the DOM. Each is a node.

//The Documents object is at the very top of the DOM and is the entry point of the DOM. It is also the root element in all html document. This is followed by the head and body elements and then it goes on and on. Whatever is in the html has to be in the DOM to allow us manipulate the dom.

//The DOM methods and the properties that we use to manipulate the DOm are not part of Javascript thought by some. The DOM  and its properties are not in the ECMA script specification. However, the dom and DOM props are part of the Web APIs of our browsers. These APIs are already part of our browsers so we do not need to import them. They auto recognize our codes.

//We use the onClick or addEventListener event listener to react to the clicking of a button

let secretNumber = Math.floor(Math.random() * 20) + 1; //Random number defined outside because we want only a single random number generated at the start of game session
let highScore = 0; //The highscore at the beginning of a game session

//Using refactoring, we create a function that will display the messages instead of  using document.querySelector('.message').textContent= ... all over again

const displayedMessage = function (anyMessage) {
  document.querySelector('.message').textContent = anyMessage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);

  //When no input is made
  if (!guess) {
    displayedMessage("You haven't inputed a number! Try again!"); //Refactored from  document.querySelector('.message').textContent= "You haven't inputed a number! Try again!"

    //When guessed number is same as secret number
  } else if (guess === secretNumber) {
    document.body.setAttribute('style', 'background-color: green');
    document.querySelector('.number').setAttribute('style', 'width: 200px');
    //We can also style a node like this:
    // document.querrySelector('.number').style.backgroundColor = 'blue' // but not the camel casing for
    //Note that these are not changes to the CSS files but just temporary inline styles applied. This is possible because inline styles are higher in relevance than linked css
    displayedMessage('You won!💕🤑🥳');
    document.querySelector('.number').textContent = guess;

    //If the present score is greater than the highscore
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    score = score + 1;
    //When guess is lower or higher than secret number
  } else if (guess !== secretNumber) {
    displayedMessage(
      guess < secretNumber ? 'You Guessed too low 😂' : 'You Guessed too high😐'
    );
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }

  /*

  This was the code for when guess is lower or higher than secret number but I refactored it above

  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'You Guessed too low 😂';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    //When guess is higher than secret number
  } else if (guess > secretNumber) {
     document.querySelector('.message').textContent = 'You Guessed too high😐';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } */

  //When trials have been exhausted
  if (score <= 0) {
    document.body.setAttribute('style', 'background-color: red');
    displayedMessage('Game is up!🤣');
    window.location.reload();
  }
});

const again = function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.body.setAttribute('style', 'background-color: black');
  displayedMessage('Your entry is...');
  secretNumber = Math.floor(Math.random() * 20) + 1;
};
