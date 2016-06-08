var Queue = function(...args) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.head = 0;
  queue.tail = 0;
  Object.keys(queueMethods).forEach(function(key) {
    queue[key] = queueMethods[key];
  });
  return queue;
};

var queueMethods = {
  _shift: function() {

  },
  size: function() {
    return this.tail - this.head;
  },
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    
  }
};