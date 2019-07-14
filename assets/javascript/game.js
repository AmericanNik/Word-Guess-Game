// words list
var words = ["PRINCESSZELDA", "LINK", "HYRULE", "RUPEE", "SHIEK", "DEKU", "OCARINA", "TEMPLEOFTIME"];

var maxNumGuesses = 8;
var guessedLetters = [];
var ansWordArr = [];
var numGuessesRemaining = 0;
var numWins = 0;
var numLosses = 0;
var isFinished = false;
var ansWord;

function setup() {

    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];


    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }


    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];


    updateScreen();
}


function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

}


function checkGuess(letter) {
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);

        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            }

        } else {
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                }
            }
        }


};

//function to check if the player is a winner
function isWinner() {
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
}
}
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
    }

}


//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(ansWord);
