class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        let queue = [];
        this.front = null;
        this.rear = null;
        this.size = 0;

    }

    isEmpty() {
        return !this.front;
    }

    enqueue(data) { //add a rear
        let node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        }
        return "element is added";
    }
    dequeue() { // removes from front
        let node = this.front;
        if (!this.isEmpty()) {
            this.front = this.front.next;
        } else {
            console.log("Empty");
        }
        if (!this.front) {
            this.rear = null;
        }
        return node;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("empty");
        } else {
            var temparr = [];
            var temp = this.front;
            while (temp) {
                temparr.push(temp.data);
                temp = temp.next;
            }
            console.log(temparr.join(","));
        }
        return " ";

    }
}
module.exports = Queue;