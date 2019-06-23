//Variables

let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles"];
let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let incorrectGuesses = [];
let lettersToGuess = [];
let displayToUser = [];
let letterCounter = 0;

//Functions

//sets up & clears guesses, displays for hidden word(_)
//can use to get started and reset
function initialize () {
    guessesLeft = 12;
    incorrectGuesses = [];
    displayToUser = [];
    wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //loop through wordpicked and make letters display as _
    for (let i = 0; i < wordPicked.length; i++) {
        displayToUser[i] = "_";
    }
    console.log("Word looks like: " + displayToUser.join(" "));
    document.getElementById("word-text").innerHTML = displayToUser.join(" ");
    document.getElementById("directions-text").innerHTML = "Guess the word to make it to the crossing on time!"
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + "";
    document.getElementById("notification").innerHTML = "";
}

function didYouWin () {
    //converts what user has guessed to the word to see if all letters have been guessed
    //wins, losses, resets accordingly 
    if (letterCounter === wordPicked.length) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        initialize();
    } else {
        if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            initialize();
        }
    }
}

initialize();

//playing the game: when user presses key to begin...
document.onkeyup = function(event) {
    
    let userGuess = event.key.toLowerCase();
    
    //if/else to determine if user guess is part of the word
    //guess gets displayed in correct place on word if right
    //guess gets put in incorrect guesses if wrong 
    if (wordPicked.indexOf(userGuess) > -1) {
        for (let i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === userGuess) {
                displayToUser[i] = userGuess;
                console.log(displayToUser);
                document.getElementById("word-text").innerHTML = displayToUser.join(" ");
                letterCounter++;
                guessesLeft--;
                document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
                didYouWin();
            }
        }
    } else {
        if (!wordPicked.indexOf(userGuess) > -1) {
            incorrectGuesses.push(userGuess);
            console.log(incorrectGuesses);
            document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + incorrectGuesses.join(", ");
            guessesLeft--; 
            document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
            didYouWin();
        }
    }

}
