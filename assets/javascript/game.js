
$(document).ready(function(){

let wordBank = ["Legend of Zelda", "Hyrule", "Princess Zelda", "Link"];

let letterBank = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let userGuessed = [];

let selectedWordArray = [];

let maxGuesses = 9;

let remainingGuesses = 0;

let wins = 0;

let losses = 0;

let selectedWord = "";

  document.onkeyup = function(){
  let userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();

  console.log("User Guess: ", userGuess);

  };

// game begin
  function gameBegin(){
    // reset stats
      selectedWordArray = [];
      remainingGuesses = maxGuesses;

    //picks random word
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(selectedWord);
  }

  for (i = 0; i < selectedWord.length; i++){
    selectedWordArray[i] = "_";
  }


  gameBegin();

});
