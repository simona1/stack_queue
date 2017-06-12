class Queue {
  constructor() {
    this._storage = [];
  }

  size() {
    return this._storage.length;
  }

  enqueue(item) {
    this._storage.push(item);
    return this._storage[this._storage.length - 1];
  }

  dequeue() {
    return this._storage.shift();
  }
}

module.exports = Queue;
