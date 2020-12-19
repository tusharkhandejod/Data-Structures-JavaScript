let readline = require("readline-sync");
const balancedParanthesess = require("./BalancingParenthesesLogic");
let expresion = readline.question("Enter the expression: ");
balancedParanthesess.BalParentheses(expresion);