//Variables

let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles"];
let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let incorrectGuesses = [];
let lettersToGuess = wordPicked.length;
let displayToUser = [];

//Functions

//sets up & clears guesses, displays for hidden word(_)
//can use to get started and reset
function initialize () {
    guessesLeft = 12;
    incorrectGuesses = [];
    displayToUser = [];
    wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    lettersToGuess = wordPicked.length;
    //loop through wordpicked and make letters display as _
    for (let i = 0; i < wordPicked.length; i++) {
        displayToUser[i] = "_";
    }
    console.log("Word looks like: " + displayToUser.join(" "));
    document.getElementById("word-text").innerHTML = displayToUser.join(" ");
}

//playing the game: when user presses key to begin...
document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
    
}
