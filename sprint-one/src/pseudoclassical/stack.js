var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._length = 0;
  this._storage = {};
};

Stack.prototype.size = function() {
  return this._length;
};

Stack.prototype.push = function(value) {
  this._storage[this._length] = value;
  this._length++;
};

Stack.prototype.pop = function() {
  if (this._length > 0) {
    var removeIndex = --this._length;
    var poppedValue = this._storage[removeIndex];
    this._storage[removeIndex] = undefined;
    return poppedValue;
  }
};
