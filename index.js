var inquirer = require("inquirer");
var Word = require("./Word.js");

var testWord = new Word("hello");
console.log(testWord.getWord());