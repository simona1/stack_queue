const expect = require('chai').expect;
const Stack = require('../src/Stack.js');

describe('Stack', function() {
  it ('should have a size operation', function() {
    const stack = new Stack();
    expect(stack.size).is.a('function');
  });
  it ('should have a push operation', function() {
    const stack = new Stack();
    expect(stack.push).is.a('function');
  });
  it ('should have a pop operation', function() {
    const stack = new Stack();
    expect(stack.pop).is.a('function');
  });

  it ('should return 0 when making a new stack', function() {
    const stack = new Stack();
    expect(stack.size()).to.equal(0);
  });
  it ('should not return 0 after adding an item', function() {
    const stack = new Stack();
    stack.push(1);
    expect(stack.size()).to.equal(1);
  });
  it ('should return the updated size after multiple pushes', function() {
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(5);
    expect(stack.size()).to.equal(3);
  });
  it ('should return the updated size after multiple pops', function() {
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(5);
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(1);
  });
})
