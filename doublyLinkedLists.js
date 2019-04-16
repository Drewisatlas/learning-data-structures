// has a value, next, previous
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    let node = new Node(val);
    if (!this.head) {     //if there is no head
      this.head = node;   //set the new node to the head
      this.tail = node;   //set the new node to the tail
    } else {                  //otherwise...
      this.tail.next = node;  //set the next property of the current tail to the new node
      node.prev = this.tail;  // set the new nodes previous property to the tail
      this.tail = node;       // update the tail for the DoublyLinkedList to the new node
    }
    this.length ++;   //Increment the length to indicate a node has been added
    return this;  // return the list
  }

  pop () {
    if (!this.head) return undefined; // if there is no head return undefined.
    let popped = this.tail; // store the node that we will be popping in a variable
    if (length === 1) { // if there is only one node in the list
      this.head = null; // set the head to null
      this.tail = null; // set the tail to null
    } else {  // otherwise
      this.tail = popped.prev; // set the new tail to the node we are poppings previous node.
      this.tail.next = null; // sever the connection between the new tail and the old tail.
      popped.prev = null; //sever the lingering connection between the old tail and the new tail.
    }
    this.length --; // decrement the length of the list
    return popped; // return the popped node
  }
}

let list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(6);
console.log(list);
