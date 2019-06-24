//Variables

let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles"];
let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let incorrectGuesses = [];
let displayToUser = [];
let letterCounter = 0;

document.getElementById("directions-text").innerHTML = "Guess the word to make it to the crossing on time!"
//Functions

//sets up & clears guesses, letter counter, displays for hidden word(_); displays all game stats 
//can use to get started and reset
function initialize () {
    letterCounter = 0;
    guessesLeft = 12;
    document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
    incorrectGuesses = [];
    document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + "";
    displayToUser = [];
    wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //loop through wordpicked and make letters display as _
    for (let i = 0; i < wordPicked.length; i++) {
        displayToUser[i] = "_";
    }
    console.log("Word looks like: " + displayToUser.join(" "));
    document.getElementById("word-text").innerHTML = displayToUser.join(" ");
   

    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
}

function didYouWin () {
    //converts what user has guessed to the word to see if all letters have been guessed
    //wins, losses, resets accordingly 
    if (letterCounter === wordPicked.length && guessesLeft >= 0) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        alert("You have made it to the next crossing!");
        initialize();
    } else {
        if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            alert("You have died of dysentery.");
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
    //didYouWin function called to determine if entire word was guessed in time; this function also initializes new round  
    if (wordPicked.indexOf(userGuess) > -1) {
        for (let i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === userGuess) {
                displayToUser[i] = userGuess;
                console.log(displayToUser);
                document.getElementById("word-text").innerHTML = displayToUser.join(" ");
                letterCounter++;
                console.log("letters counted: " + letterCounter);
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
