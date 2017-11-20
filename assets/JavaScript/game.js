/*
INCOMPLETE:I DID NOT CREATE A RESET OR START GAME FUNCTION ON "ANY KEY PRESS" THAT RESETS/STARTS THE 
CODE FOR THE USER TO PLAY ANOTHER ROUND AND FOR THE WIN/LOSS COUNTER TO INCREASE AS THE USER PLAYS. 
I WENT BACK AND TRIED TO PUT EVERYTHING WITHING A START GAME FUNCTION BUT IT BROKE MY WORKING CODE.
I WAS ABLE TO GET THE LOSS COUNTER TO WORK WHEN THE PLAYER LOST BUT NOT THE WIN COUNTER.
I ALSO WANTED MY CORRECT LETTER GUESSES AND WRONG LETTER GUESSES TO GO AFTER MY HEADER 
FOR EACH DIV IN THE HTML INSTEAD OF REPLACING IT WITH .INNERHTML JS FUNCTION. 
*/

//Array to chose words in game//
var words = [ "knot", 
              "hang", 
              "rope",
              "choke",
            ];

//VARIABLES FOR GAME REQUIREMENTS
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var wrongGuess = [];
var underScoreWord = []; 

//FUNCTION VARIABLES
var randomWord = grabRandomWord();
var printedUnderscore = printUnderscoreToScreen();
var printedUserGuesses = printKeyEnteredToScreen();
var printedWrongGuesses = printWrongKeyEnteredToScreen();
var printedUserGuessLeft = printUserGuessesLeft();

//FUNCTIONS CORRESPONDING TO VARIABLES
function grabRandomWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}

function convertUnderscoreToScreen() {
  return 0;
}
function printUnderscoreToScreen() {
  var printedUnderscore = document.getElementsByClassName("underscoresForWord");
  return printedUnderscore;
}

function printKeyEnteredToScreen() {
  var printedUserGuesses = document.getElementsByClassName('correctLettersGuessed');
  return printedUserGuesses;
}
function printWrongKeyEnteredToScreen() {
  var printedWrongGuesses = document.getElementsByClassName("wrongLettersGuessed");
  return printedWrongGuesses;
}
function printUserGuessesLeft() {
  var printedUserGuessLeft = document.getElementsByClassName('guessesLeft');
  return printedUserGuessLeft;
}

function winLose() {
  if(guessesLeft === 0)
	{
		losses++;
    alert('You Lose');
  }
}


//Convert Letters In Word Into Underscores
var createUnderscore = () => {
  for(let letterIndex = 0; letterIndex < randomWord.length; letterIndex++) {
    underScoreWord.push("_");
    printedUnderscore[convertUnderscoreToScreen()].innerHTML = underScoreWord.join(' ');
  }
  return underScoreWord;
}
console.log (createUnderscore());

//Create OnKey Event Listener To Capture User's Keyletter Press
document.onkeyup = function (event) {
  keyEntered = event.key;
  console.log(keyEntered);
//IF KEY ENTERED MATCHES WORD PUSH TO ARRAY AND DISPLAY IT ON SCREEN
  if(randomWord.indexOf(keyEntered) > -1) {
    userGuesses.push(keyEntered);
    console.log(userGuesses);
    underScoreWord[randomWord.indexOf(keyEntered)] = keyEntered;
//PRINTS KEY ENTERED TO SCREEN AND IN ARRAY (DOM)    
    printedUnderscore[0].innerHTML = underScoreWord.join(' ');
    printedUserGuesses[0].innerHTML = userGuesses.join(' '); 
//IF ALL LETTERS ARE GUESSED ALERT YOU WIN AND INCREASE WIN COUNTER    
    if(underScoreWord.join('') == randomWord) {
      alert('You Win');
      wins++;
    }
  }
//IF WRONG GUESS PUSH TO WRONG GUESS BOX AND DECREASE GUESSES LEFT COUNTER/PRINT TO SCREEN  
  else{
    wrongGuess.push(keyEntered);
    console.log(wrongGuess);
    printedWrongGuesses[0].innerHTML = wrongGuess.join(' ');
    guessesLeft--;
    console.log(guessesLeft);
    printedUserGuessLeft[0].innerHTML = guessesLeft;
  }
  winLose();
}