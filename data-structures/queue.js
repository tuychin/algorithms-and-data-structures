/**
 * Queue methods:
 * enqueue, dequeue, size, front, print, isEmpty
 */

class Queue {
  constructor() {
    this.collection = [];
  }
  
  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
      return this.collection.shift(); 
  }

  front() {
      return this.collection[0];
  }

  size() {
      return this.collection.length; 
  }

  isEmpty() {
      return (this.collection.length === 0); 
  }

}

const myQueue = new Queue(); 
myQueue.enqueue('a'); 
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.print();
myQueue.dequeue();
console.log(myQueue.front());
myQueue.print();
