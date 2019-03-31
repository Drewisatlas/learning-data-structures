//create a Stack class to store the elements/nodes of the stack
class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push (value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else if (this.size >= 1) {
      let currFirst = this.first;
      this.first = node;
      this.first.next = currFirst;
    }
    return this.size++;
  }
}

//create a node class that will represent elements/nodes in the stack
class Node {
  constructor (value) {
    this.value = value;
    this.next = next;
  }
}
