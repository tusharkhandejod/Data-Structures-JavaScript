const stackFile = require('./StackLogic');

BalParentheses = expression => {
    array = expression.toString().split("");
    let stack = new stackFile.Stack();
    array.forEach(element => {
        if (element == "(" || element == "[" || element == "{") {
            stack.push(element);
        } else if (element == ")" && stack.top.data == "(") {
            stack.pop();
        } else if (element == "]" && stack.top.data == "[") {
            stack.pop();
        } else if (element == "}" && stack.top.data == "{") {
            stack.pop();
        }
    });
    stack.isEmpty();
    if (stack.size === 0) {
        console.log("Parentheses are balanced");
    } else {
        console.log("Parentheses are not balanced");
    }
};
module.exports = {
    BalParentheses
};