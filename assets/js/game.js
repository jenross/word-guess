 //Variables

 let wins = 0;
 let losses = 0;
 let guessesLeft = 12;
 let wordChoices = ["dysentery", "crossing", "cholera", "oxen", "yoke", "hunt", "wagon", "landmark", "typhoid", "measles"];
 let wordPicked = wordChoices[Math.floor(Math.random() * wordChoices.length)];
 let incorrectGuesses = [];
 let lettersToGuess = wordPicked.length;
 let displayToUser = [];