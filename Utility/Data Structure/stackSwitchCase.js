const readline = require('readline-sync');
const stack = require('../stackMethods');

//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;


while (flag) {

    //userinput to select the option in menu    
    let userInput = readline.questionInt(`\nEnter your choice  \n1.Push  \n2.Pop   \n3.Display   \n4.IsEmpty: \n5.Exit:\n`);

    switch (userInput) {

        case 1:
            //length of stack asks user to input stack size
            let lengthOfStack = readline.questionInt("What is size of stack : ");
            for (let i = 0; i < lengthOfStack; i++) {
                let num = readline.questionInt("Enter number to push " + i + "--> ");
                stack.push(num);
            }
            break;

        case 2:
            console.log("Delete the number from stack");
            console.log(stack.pop());
            break;

        case 3:
            console.log("Elements in stack are : ");
            console.log(stack.printStack());
            break;

        case 4:
            console.log("Checking if stack is empty or not : ");
            console.log(stack.isEmpty());
            break;

        case 5:
            flag = false;
            process.exit(1);
            break;

        default:
            console.log("Provide valid option");
            break;

    }
}