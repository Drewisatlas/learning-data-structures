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
  push(val){ //inserting at the end, accepts a value
    //creates a new node using the value passed
    let node = new Node (val);
    //if there is no head property on the list, set the head and tail to be the newly created Node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    //Otherwise set the next property on the tail to be the new node, and set the tail property on the list to be the newly created node
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    //increment length by one
    this.length ++;
    //return the SinglyLinkedList
    return this;
  }
  // traverse () {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current);
  //     current = current.next;
  //   }
  // }
  pop (){
    //if there is no nodes in the list return undefined
    if (this.length === 0) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;
      //loop throught the list until you reach the tail
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      //Set the next property of the 2nd to last node to be null
      newTail.next = null; // severs the connection with the last node
      //set the tail to be the 2nd to last node
      this.tail = newTail;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("!")
console.log(list)
list.pop()
console.log(list)
