var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._length = 0;
  this._storage = {};
};

Stack.prototype.size = function(value) {
  return this._length;
};

Stack.prototype.push = function(value) {
  this._storage[this._length] = value;
  this._length++;
};
