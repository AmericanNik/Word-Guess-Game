$(document).ready(function() {

  let wordBank = ["hyrule", "link", "princesszelda", "deku", "kokiri", "ganandorf", "epona", "ocarina"];
  let selectedWord;
  let selectedWordLetters = [];
  let letterBlanks = [];
  let wins = 0;
  let losses = 0;
  let blanksNumber = 0;
  let gameContinue = "y"


  //select random word

  selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(selectedWord);
  let rightLetter = [];
  let wrongLetter = [];
  let spaces = [];
  let guessesLeft = 9;
  let numberOfLetters = 0;

  selectedWordLetters = selectedWord.split("");
  console.log(selectedWordLetters);

  blanksNumber = selectedWord.length;


  //create spaces for word

  function createSpaces() {
    for (i = 0; i < selectedWord.length; i++) {
      spaces.push("-");
      $("#letterArea").html(spaces);
    }
    return spaces;
  }
  createSpaces();

  document.onkeyup = function(event) {
    let userInput = event.key.toLowerCase();
    console.log(userInput);


    // $(document).keyup(function(event){
    //   let userInput = event.key.toLowerCase();
    //   console.log(userInput);

    if (selectedWord.indexOf(userInput) > -1) {
      for (i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === userInput) {
          spaces[i] = userInput;
          document.getElementById("letterArea").innerHTML = spaces.join("");
        }
      }
    }


    let matched = true;
    for (i = 0; i < spaces.length; i++) {
      console.log(wrongLetter)
      if (spaces[i] !== (selectedWord.split(""))[i]) {
        matched = false;
      }
    }
    if (matched === true) {
      console.log("You win!");
      wins++;
      document.getElementById("winStats").innerHTML = wins;
      document.getElementById("message").innerHTML = "You win!";

      console.log(wins);
      reset();
    } else {
      // Push wrong guess into wrongLetter array
      wrongLetter.push(userInput);
      // Show which letters were guessed incorrectly on the screen
      document.getElementById("lettersUsed").innerHTML = wrongLetter.join(", ");
      // Decrease the number of guesses left
      guessesLeft--;
      // Update number of guesses left on the screen
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      console.log(guessesLeft);
      console.log(wrongLetter);

      if (guessesLeft === 0) {
        console.log("Sorry, you lose.");
        losses++;
        document.getElementById("loseStats").innerHTML = losses;
        document.getElementById("message").innerHTML = "Sorry, you lose.";

        console.log(losses);
        reset();
      }
    }
  };


  function reset() {
    guessesLeft = 9;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    rightLetter = [];
    wrongLetter = [];
    document.getElementById("lettersUsed").innerHTML = wrongLetter.join(", ");
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(selectedWord);
    selectedWordLetters = selectedWord.split("");
    letterBlanks = selectedWordLetters.length;
    spaces = [];
    createSpaces();
    return spaces;
  }
  //
  // console.log(selectedWord.split(""));
  // console.log(spaces);







});
