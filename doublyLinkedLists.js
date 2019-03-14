// has a value, next, previous
class Node {
  constructor (val){
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
}

first = new Node(13);
first.next = new Node(14);
first.next.prev = first;
