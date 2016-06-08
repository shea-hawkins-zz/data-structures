var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(Queue.prototype);
  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  size: function() {
    return this.tail - this.head;
  },
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }
};

Queue.prototype = queueMethods;



