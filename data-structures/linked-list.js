/**
 * Linked list methods:
 * size, addToHead, removeFromHead, find, remove, reverse
 */

class LinkedList {
  constructor(value) {
      this.head = null;
      this.length = 0;
      this.addToHead(value);
  }

  size() {
    return this.length -1;
  };
  
  addToHead(value) {
      const newNode = { value };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
  
  removeFromHead() {

      if (this.length === 0) {
          return undefined;
      }
      
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      
      return value;
  }
  
  find(val) {
      let thisNode = this.head;
      
      while(thisNode) {
          if(thisNode.value === val) {
              return thisNode;
          }
          
          thisNode = thisNode.next;
      }
      
      return thisNode;
  }
  
  remove(val) {
      
      if(this.length === 0) {
          return undefined;
      }
      
      if (this.head.value === val) {
          return this.removeFromHead();
      }
      
      let previousNode = this.head;
      let thisNode = previousNode.next;
      
      while(thisNode) {
          if(thisNode.value === val) {
              break;
          }
          
          previousNode = thisNode;
          thisNode = thisNode.next;
      }
      
      if (thisNode === null) {
          return undefined;
      }
      
      previousNode.next = thisNode.next;
      this.length--;
      return this;
  }


  reverse() {
    let result = null;
    let stack = [];
    let current = this.head;

    while (current) {
      stack.push(current);
      current = current.next;
    }
    
    // Set head to end of list.
    result = stack.pop() || [];
    current = result;
    
    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    return result;
};
  
}


const myList = new LinkedList();
myList.addToHead('Kitten');
myList.addToHead('Puppy');
myList.addToHead('Dog');
myList.addToHead('Cat');
myList.addToHead('Fish');
console.log(myList.size());
console.log(myList.removeFromHead());
console.log(myList.remove('Puppy'));
console.log(myList.find('Dog'));
console.log(myList.size());
console.log(myList.reverse());
console.log(myList);