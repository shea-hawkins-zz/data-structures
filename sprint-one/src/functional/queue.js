var Queue = function() {
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var shift = function (collection) {
    for (var i = length - 1; i >= 0; i--) {
      collection[i + 1] = collection[i];
    }
    collection[0] = undefined;
    return collection;
  };
  someInstance.enqueue = function(value) {
    storage = shift(storage); //As if immutable and following function paradigms
    storage[0] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var dequeuedValue = storage[length - 1];
    storage[length - 1] = undefined;
    length--;
    return dequeuedValue;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
