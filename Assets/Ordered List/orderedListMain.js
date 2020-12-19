const fs = require('fs');
const linkedList = require('./orderedListLogic');
const readline = require("readline-sync");
let filedata = fs.readFileSync('./orderedListRead.txt');
console.log("Numbers data read from file: " + filedata);
searchNumber = readline.question("Enter a number that you wants to search = ");
linkedList.orderedList(filedata, searchNumber);