class Letter {
    constructor(character) {
        this.character = character;
        this.isGuessed = false;
    }

    getLetter() {
        if (this.isGuessed) {
            return this.character;
        } else if (!this.isGuessed) {
            return "_";
        }
    }

    guessLetter(guess) {
        if (guess === this.character) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;