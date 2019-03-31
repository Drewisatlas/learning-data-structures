//create a Queue class to store the elements/nodes of the Queue
 class Queue {
   constructor () {
     this.first = null;
     this.last = null;
     this.size = 0;
   }
   //enqueue
   enqueue(val) {
     let node = new Node(val);
     if (this.size === 0) {
       this.first = node;
       this.last = node;
     } else {
       this.last.next = node;
       this.last = node;
     }
     return this.size++;
   }
  //dequeue
  dequeue () {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
 }

//create a Queue class that will represent elements/nodes in the Queue
 class Node {
   constructor (value) {
     this.value = value;
     this.next = null;
   }
 }
