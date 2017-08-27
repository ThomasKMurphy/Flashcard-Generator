var ClozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');

var createFlashCard = function() {
  inquirer.prompt({
      name: "",
      message: "",
    }),
    inquirer.prompt({
      name: "",
      message: "",
    }),
    inquirer.prompt({
      name: "",
      message: "",
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