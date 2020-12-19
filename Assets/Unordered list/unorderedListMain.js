const fs = require('fs');
const linkedList = require('./unorderedListLogic'); //importing the unorderedListLogic.js file
const readline = require("readline-sync");
let data = fs.readFileSync('./unorderedListRead.txt');
console.log("Read the data from file: \n" + data);
stringArray = data.toString().split(' ');
searchWord = readline.question("Enter a word that you want to search = ");
linkedList.unorderedList(stringArray, searchWord);