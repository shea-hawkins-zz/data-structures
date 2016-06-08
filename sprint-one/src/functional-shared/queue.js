var Queue = function(...args) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.length = 0;
  Object.keys(queueMethods).forEach(function(key) {
    queue[key] = queueMethods[key];
  });
  return queue;
};

var queueMethods = {
  size: () => {
    return length;
  }
};

Queue.prototype = queueMethods;
