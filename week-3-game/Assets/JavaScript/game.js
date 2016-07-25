// GLOBAL VARIABLES
// -------------------------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = ["taylor", "devin", "michael", "ryan"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // t _ _ _ _ _
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (Resuable blocks of code that I will call upon when needed)
// -------------------------------------------------------------------------
function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() = wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  // Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksandSuccesses = [];

  // Populate blanks and successes with right number of blanks.
  for (var i=0; i<numBlanks; i++){
    blanksandSuccesses[i].push ("_");
  }
  // Change HTML to reflect round conditions
  document.getElementByID("wordToGuess").innerHTML = blanksandSuccesses.join(" ");
  document.getElementByID("numGuesses").innerHTML = guessesLeft;
  document.getElementByID("winCounter").innerHTML = winCount;
  document.getElementByID("lossCounter").innerHTML = lossCount;

  // Testing
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
  // Check if Letter exists in code at all

  var isLetterInWord = false;

  for (var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter) {
      isLetterInWord=true;
      alert("Letter found");
    }
  }
  // Check where in the word the letter exists, then pupulate out blanksAndSuccesses
  if (isLetterInWord) {}
    for (var i=0; i<numBlanks; i++) {
    if(selectedWord[i] == letter) {
      blanksandSuccesses[i] = letter;
    }
  }
}

  else {
    wrongLetters.push(letter);
    numGuesses --
  }

// Testing and Debugging
  console.log(blanksAndSuccesses);

}

function roundComplete(){
  ("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);}

// Update the HTML to reflect the most recent information
document.getElementByID("guessesLeft").innerHTML = guessesLeft;
document.getElementByID("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementByID("wrongGuesses").innerHTML = wrongLetters.join(" ");

// Check if user Won
if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
  winCount++
  alert("You Won!");

// Update the win counter in the HTML
document.getElementById("winCounter").insertHTML = winCount;

  startGame();
}

// Check if user Lost
else if (numGuesses == 0) {
  lossCount++;
  alert("You Lost!");

  // Update the HTML
document.getElementById("lossCounter").innerHTML = lossCount;

  startGame();
}

// Main Process
// -------------------------------------------------------------------------
// Initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

  // Testing Debugging
  console.log(letterGuesssed);
}
function roundComplete(){
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);}
