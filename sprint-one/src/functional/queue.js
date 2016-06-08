var Queue = function() {
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var shift = function () {
    for (var i = length - 1; i >= 0; i--) {
      storage[i + 1] = storage[i];
    }
    storage[0] = undefined;
  };
  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
