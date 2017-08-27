var ClozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');

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


// var firstPresident = new flashCards.BasicCard('Who was the first president of the United States?', 'George Washington') {
// console.log(firstPresident.front);
// console.log(firstPresident.back); 
// };

// firstPresident = new flashCards.ClozeCard('George Washington was the first president of the United States.', 'George Washington') {
// console.log(firstPresident.text);
// console.log(firstPresident.partial);
// console.log(firstPresident.cloze);
// };