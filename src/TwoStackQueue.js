const Stack = require('./Stack.js');

class TwoStackQueue {
  constructor() {
    this._stack1 = new Stack();
    this._stack2 = new Stack();
  }

  size() {
    return this._stack1.size() + this._stack2.size();
  }

  enqueue(item) {
    this._stack1.push(item);
    return this._stack1[this._stack1.length - 1];
  }

  dequeue() {
    while(this._stack1.size() > 1) {
      let current = this._stack1.pop();
      this._stack2.push(current);
    }
    const result = this._stack1.pop();
    while(this._stack2.size() > 0) {
      this._stack1.push(this._stack2.pop());
    }
    return result;
  }
}

module.exports = TwoStackQueue;
