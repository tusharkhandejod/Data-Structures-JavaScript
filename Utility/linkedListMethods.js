class Node {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {


    constructor() {
        this.head = null;
        this.size = 0;
    }

    //AddNode in LinkedList 
    //parameters data is taken from user

    addNode(data) {
        let first = new Node(data);

        let current = this.head;
        if (this.head == null) {
            return this.head = first;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = first;
            return first = current;
        }
    }

    // to ckeck is list empty or not
    isEmpty() {
        return this.size == 0;
    }

    //calculate size of linkedlist
    size() {
        console.log(this.size);
    }

    //add first in linkedlist
    //param data take from user
    addFirst(data) {
        let firstNode = new Node(data);
        firstNode.next = this.head;
        this.head = firstNode;
        return firstNode;
    }


    //add last in linkedlist
    addLast(element) {
        // creates a new node 
        var node = new Node(element);

        // to store current node 
        var current;

        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }

    //print the list
    printList() {
        var current = this.head;
        var str = "";
        while (current) {
            str += current.element + " ";
            current = current.next;
        }
        console.log(str);
    }


    // delete first from linkedlist

    deleteFirst() {
        this.head = this.head.next;
        return this.head;
    }

    // delete last in linkedlist
    deleteLast() {

        let lastNode = this.head;
        let previous;
        while (lastNode.next != null) {
            previous = lastNode;
            lastNode = lastNode.next;
        }
        previous.next = null;
    }


    // insert element at the position index 
    // of the list 
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(element);
            var current, previous;

            current = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                // adding an element 
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }




    deleteAtPosition(pos) {
        let possition = this.head;
        let previous;
        let count = 0;
        while (count < pos) {
            count++;
            previous = possition;
            possition = possition.next;
        }
        previous.next = possition.next;
    }

    deleteNode(data) {
        let temp = this.head;
        let previous = null;

        if (temp.data == data) {
            this.head = temp.next;
            return temp.data;
        }
        while (temp != null && temp.data != data) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = temp.next;

        return temp.data;
    }




    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node;
            this.size++;
        } else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
            return data;
        }
    }
    show() {
        let arr = [];
        console.log();
        this.current = this.head;
        while (this.current != null) {
            arr.push(this.current.data);

            this.current = this.current.next;
        }

        return arr;
    }
}

module.exports = LinkedList;