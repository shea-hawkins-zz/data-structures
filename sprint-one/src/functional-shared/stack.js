var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  Object.assign(stack, stackMethods);
  return stack;
};

var stackMethods = {
  size: function() {
    return this.length;
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    if (this.length > 0) {
      var removeIndex = --this.length;
      var poppedValue = this.storage[removeIndex];
      this.storage[removeIndex] = undefined;
      return poppedValue;
    }
  }
};


