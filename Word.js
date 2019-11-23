var Letter = require("./Letter.js");

class Word {
    constructor(word) {
        this.word = [];
        for (var i = 0; i < word.length; i++) {
            this.word.push(new Letter(word[i]));
        }
    }

    getWord() {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i].getLetter();
        }
        return wordString;
    }

    guessEachLetter(guess) {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].guessLetter(guess);
        }
    }
    revealWord() {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i].revealLetter();
        }
        return wordString;
    }


}

module.exports = Word;