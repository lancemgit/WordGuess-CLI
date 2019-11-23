// Dependencies
var inquirer = require("inquirer");
var Word = require("./Word.js");

// Global variables for list of words and the current word
var wordList = ["cherry", "servant", "offer", "coordinated", "appreciate", "rock", "blind", "telephone", "sticks", "border", "sassy", "place", "sad", "burly", "launch", "fairies", "tap", "laugh", "fearless", "wide-eyed", "loud", "yoke", "desire", "grandfather"];
var currentWord = "";
var guesses = 7;

// Function to choose a random word from wordList
function initializeGame() {
    currentWord = new Word(wordList[Math.floor(Math.random() * wordList.length)].toLowerCase());
    guesses = 7;
    askChoice();
}

// Function to ask for the user to choose a letter
function askChoice() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "userInput",
                message: "\n\n*******************************" +
                    "\nThe amount of guesses remaining is "
                    + guesses +
                    "\nThe current visible word is...\n"
                    + currentWord.getWord() +
                    "\nOnly the first letter of your response will count." +
                    "\nChoose wisely...  "
            }
        ])
        .then(answers => {
            // Incrementing guesses down
            if (!currentWord.revealWord().includes(answers.userInput)) {
                guesses--;
            }
            // Running the guessLetter function on each letter in currentWord
            currentWord.guessEachLetter(answers.userInput[0].toLowerCase());
            // Checking if the user has won the game
            if (currentWord.getWord().includes("_") && guesses > 0) {
                askChoice();
            } else if (!currentWord.getWord().includes("_") && guesses > 0) {
                displayWin();
            } else if (guesses < 1) {
                displayLoss();
            }
        });
}

// Function to ask the user if they would like to play again
function playAgain() {
    inquirer
        .prompt([
            {
                type: "list",
                choices: ["Yes", "No"],
                name: "userChoice",
                message: "\n\n*******************************" +
                    "\nWould you like to play again?"
            }
        ])
        .then(answers => {
            if (answers.userChoice === "Yes") {
                initializeGame();
            } else if (answers.userChoice === "No") {
                process.exit();
            }
        });
}

// Function to display to the user that they have loss
function displayLoss() {

    console.log("\n\n*******************************" +
        "\nYou have lost the game.\n" +
        "The word was  - " + currentWord.revealWord());
    playAgain();
}


// Function to display to the user that they have won
function displayWin() {
    console.log("\n\n*******************************" +
        "\nCONGRATULATIONS you won!\n" +
        "The word was  - " + currentWord.revealWord());
    playAgain();
}
// Initially run the game
initializeGame();