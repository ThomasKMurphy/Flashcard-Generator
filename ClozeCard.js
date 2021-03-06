// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, 

// The constructor should accept two arguments: text and cloze.

// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.


var BasicCard = require("./BasicCard.js");
var inquirer = require('inquirer');

var ClozeCard = function(text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.partial = function() {
    if (this.text.includes(this.cloze)) {
      return this.fullText.replace(this.cloze, "...");
    }
    if (err) {
      return console.log(err);
    }
  }
};

var createFlashCard = function() {
  inquirer.prompt({
      name: "complete",
      message: "Enter complete sentence.",
    }),
    inquirer.prompt({
      name: "response",
      message: "Enter hidden word.",
    }),
    inquirer.prompt({
      name: "incomplete",
      message: "Enter incomplete sentence.",
    })
}

module.exports = ClozeCard;