//Variables

let wins = 0;
let losses = 0;
let guessesLeft = 12;
let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles", "trail", "oregon", "river"];
let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let incorrectGuesses = [];
let displayToUser = [];
let letterCounter = 0;
let winSound = new Audio("assets/sounds/win-sound.ogg");
let loseSound = new Audio("assets/sounds/GameOver.wav");

//Functions

//sets up & clears guesses, letter counter, displays for hidden word(_); displays all game stats, hides play again button and win/lose images 
//can use to get started and reset
function initialize () {
    winSound.pause();
    loseSound.pause();
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
    document.getElementById("play-button").style.display = "none";
    hideImages();
}

function didYouWin () {
    //letter counter increments every time user guesses a letter in the word; this is compared to length of the word to see if all letters have been guessed
    //wins nad losses increment accordingly 
    //win/lose sound plays; win/lose image displays; word is shown regardless of win or loss
    if (letterCounter === wordPicked.length && guessesLeft >= 0) {
        document.getElementById("word-text").innerHTML = wordPicked;
        document.getElementById("win-image").style.display = "inline-block";
        winSound.play();
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        document.getElementById("play-button").style.display = "inline-block";
    } else {
        if (guessesLeft === 1) {
            document.getElementById("word-text").innerHTML = wordPicked;
            document.getElementById("lose-image").style.display = "inline-block";
            loseSound.play();
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            document.getElementById("play-button").style.display = "inline-block";
        }
    }
}

//hides win/lose images so that they don't display until a win or loss occurs
function hideImages () {
    document.getElementById("win-image").style.display = "none";
    document.getElementById("lose-image").style.display = "none";
}

//sets game up to play
initialize();

//playing the game: when user presses key to begin...
document.onkeyup = function(event) {
    
    let userGuess = event.key.toLowerCase();

    //if/else to determine if user guess is part of the word
    //guess gets displayed in correct place on word if right
    //guess gets put in incorrect guesses array and displayed if wrong
    //didYouWin function called to determine if entire word was guessed in time 
    if (wordPicked.indexOf(userGuess) > -1) {
        for (let i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === userGuess) {
                displayToUser[i] = userGuess;
                console.log(displayToUser);
                document.getElementById("word-text").innerHTML = displayToUser.join(" ");
                letterCounter++;
                console.log("letters counted: " + letterCounter);
                didYouWin();
            }
        }
    } else {
        if (!wordPicked.indexOf(userGuess) > -1) {
            incorrectGuesses.push(userGuess);
            console.log(incorrectGuesses);
            document.getElementById("incorrect-guesses-text").innerHTML = "You have already guessed: " + incorrectGuesses.join(", ");
            didYouWin();
        }
    }
    //decrement each time user guesses a letter, whether incorrect or not
    guessesLeft--;
    document.getElementById("guesses-left-text").innerHTML = "Guesses remaining: " + guessesLeft;
}
