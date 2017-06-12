class Stack {
  constructor() {
    this._storage = [];
  }

  size() {
    return this._storage.length;
  }

  push(item) {
    return this._storage.push(item);
  }

  pop() {
    return this._storage.pop();
  }
}

module.exports = Stack;
