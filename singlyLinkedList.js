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
  shift() { //should
    // if there are no nodes, return undefined.
    if (this.length === 0) {
      return undefined;
    } else {
      // store the current head in a variable
      let current = this.head;
      // Set the head property to be the current head's next property
      this.head = current.next;
      // decrement the length by 1
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      // return the value of the node removed
      return current;
    }
  }
  unshift(val) { //accepts a value and adds it to the front of the list
    // creates a new node using the value passed to the function
    let newNode = new Node(val);
    //if there is no head set the head and the tail to be the newely created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //else set the newly created node's next to be the current head property on the list
      newNode.next = this.head;
      // set the head property on the list to be the new node
      this.head = newNode;
    }
    // increment the length of the list by 1
    this.length ++;
    // return the linked list
    return this;
    }
  }

  get (index) {
    //if the index is less than zero or greater than or equal to the length of the list return null
    if (index < 0 || index >= this.length) {
      return null;
    }
    let i = 0;
    let current = this.head;
    //Loop through the list until you reach the index,
    while (i !== index) {
      current = this.next;
      i++;
    }
    //return the node at that specific index.
    return current;
  }
  set (index, value) {
    //use the get function to find a specific node.
    let node = this.get(index);
    //if node is found, set the value of that node to the value passed into the function and return true
    if (node) {
      node.value = value
      return true;
    }
    //if node is not found, return false
    return false;
  }

  insert (index, value) {
    //if index is < 0 or greater than the length, return false
    if (index < 0 || index > this.length) {
      return false;
    }
    //if the index is the same as the length, push a new node to the end of the list
    if (index === this.length) {
      return !!this.push(value); //!! coerces to boolean
    }
    //if the index is 0, unshift a new node to the start of the list
    if (index === 0) {
      return !!this.unshift(value); // !! coerces to boolean
    }
    //Otherwise, using the get method, access the node at the index -1
    let frontNode = this.get(index - 1);
    let newNode = new Node(value);
    let backNode = frontNode.next;
    //set the next property on the node to be the new node
    frontNode.next = newNode;
      //set the next property on the new node to be the previous next
    newNode.next = backNode;
    //increment the length
    this.length ++;
    //return true
    return true;
    //ideally it should only return true and false
  }

}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("!")
console.log(list)
