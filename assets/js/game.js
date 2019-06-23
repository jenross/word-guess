//Variables

let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles"];
let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let incorrectGuesses = [];
let lettersToGuess = [];
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

initialize();

//playing the game: when user presses key to begin...
document.onkeyup = function(event) {
    lettersToGuess = wordPicked.length;
    let userGuess = event.key.toLowerCase();
    //displays initial stats
    document.getElementById("directions-text").innerHTML = "Guess the word to make it to the crossing on time!"
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + incorrectGuesses.join(", ");
    
    //if/else to determine if user guess is part of the word
    //guess gets displayed in correct place on word if right
    //guess gets put in incorrect guesses if wrong 
    if (wordPicked.indexOf(userGuess) > -1) {
        for (let i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === userGuess) {
                displayToUser[i] = userGuess;
                console.log(displayToUser);
                document.getElementById("word-text").innerHTML = displayToUser.join(" ");
                guessesLeft--;
                document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
                lettersToGuess--;
            }
        }
    } else {
        if (!wordPicked.indexOf(userGuess) > -1) {
            incorrectGuesses.push(userGuess);
            console.log(incorrectGuesses);
            document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + incorrectGuesses.join(", ");
            guessesLeft--; 
            document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
        }
    }
    //if the user wins by guessing in time message displays and game starts over
    //if the user does not win lose message displays and game starts over 
    if (guessesLeft === 0 && lettersToGuess > 1) {
        document.getElementById("notification").innerHTML = "You have died of dysentery.";
        initialize();
    } else if (guessesLeft > 0 && lettersToGuess === 0) {
        document.getElementById("notification").innerHTML = "Hooray! You made it to the crossing!";
        initialize();
    }
}
