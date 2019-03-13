//Each instance should have a piece of data (val), and a reference to the next node (next)

class Node {
  constructor(val){
    this.val = val;
    this.next = null; // at the beginning there is nothing to connect to.
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){ //inserting at the end
    //accepts a value
    //creates a new node using the value passed
    let node = new Node (val);
    //if there is no head property on the list, set the head and tail to be the newly created Node
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    //Otherwise set the next property on the tail to be the new node, and set the tail property on the list to be the newly created node
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    //increment length by one
    this.length ++;
  }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
console.log(list)
