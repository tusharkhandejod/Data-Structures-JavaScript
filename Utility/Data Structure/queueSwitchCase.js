const readline = require('readline-sync');
const Queue = require('../queueMethods');

//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;

//creating the object of class Stack
let queue = new Queue();

while (flag) {

    //userinput to select the option in menu    
    let userInput = readline.questionInt(`\nEnter your choice=  \n1.enqueue  \n2.dequeue   \n3.PrintQue   \n4. exit:\n`);

    switch (userInput) {

        case 1:
            let enqueueInput = readline.questionInt("Add element to queue: ");
            console.log(queue.enqueue(enqueueInput));
            break;


        case 2:
            console.log("First Element gets removed");
            queue.dequeue();
            break;


        case 3:
            console.log("Elements in queue: ");
            queue.printQueue();
            break;

        case 4:
            flag = false;
            process.exit(1);
            break;
        default:
            console.log("Provide valid option");
            break;

    }
}