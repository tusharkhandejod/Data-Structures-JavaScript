class Node {
    constructor(data) {
        this.data = data;
        this.previous = -1;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        let node = new Node(data);
        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }
    pop() {
        let temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return temp;
    }
    isEmpty() {
        console.log(this.size === 0);
    }
}
module.exports = { Stack, Node };