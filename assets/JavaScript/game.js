//Array to chose words in game//
var words = ["The Gallows", "Noose", "Hangman", "Rope"];
var pickAWord = function (){
  var todaysWord = words[Math.floor(Math.random() * 4)];
  return todaysWord;
};

//FUNTION TO PICK WORD//
pickAWord();