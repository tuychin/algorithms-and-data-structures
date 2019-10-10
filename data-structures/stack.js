/**
 * Stack methods:
 * size, push, pop, peek
 */

class Stack {
  constructor() {
    this.input = [];
  }

  size() {
    return this.input.length;
  }

  push(element) {
    this.input.push(element);
    return this;
  }

  pop() {
    return this.input.pop();
  }

  peek() {

    if (this.input.length === 0) {
      throw new InvalidOperationException("The stack is empty");
    }

    return this.input[this.input.length -1];
  }

}
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push("coolCode");
console.log(myStack.size());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack);