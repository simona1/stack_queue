const expect = require('chai').expect;
const TwoStackQueue = require('../src/TwoStackQueue.js');

describe('TwoStackQueue', function() {
  it ('should have a size operation', function() {
    const queue = new TwoStackQueue();
    expect(queue.size).is.a('function');
  });
  it ('should return 0 when making a new queue', function() {
    const queue = new TwoStackQueue();
    expect(queue.size()).to.equal(0);
  });

  it ('should return 1 when adding a new item to the queue', function() {
    const queue = new TwoStackQueue();
    queue.enqueue('cat');
    expect(queue.size()).to.equal(1);
  });

  it ('should return the correct size after multiple enqueue operations', function() {
    const queue = new TwoStackQueue();
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.enqueue('otter');
    queue.enqueue('dolphin');
    expect(queue.size()).to.equal(4);
  });

  it ('should have a dequeue operation', function() {
    const queue = new TwoStackQueue();
    expect(queue.dequeue).is.a('function');
  });

  it ('should dequeue items in succession and return the fifo results', function() {
    const queue = new TwoStackQueue();
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.enqueue('otter');
    queue.enqueue('dolphin');
    expect(queue.dequeue()).to.equal('cat');
    expect(queue.dequeue()).to.equal('dog');
    expect(queue.dequeue()).to.equal('otter');
    expect(queue.dequeue()).to.equal('dolphin');
  });

  it ('should have a enqueue operation', function() {
    const queue = new TwoStackQueue();
    expect(queue.enqueue).is.a('function');
  });

  it ('should enqueue items and return the fifo result', function() {
    const queue = new TwoStackQueue();
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.enqueue('otter');
    expect(queue.dequeue()).to.equal('cat');
  });

});
