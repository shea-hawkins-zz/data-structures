
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._conflicts = {};
  this._usage = 0;
};

HashTable.prototype._insertNode = function(node) {
  var index = getIndexBelowMaxForKey(node.key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key === node.key) {
        bucket[i] = node;
        return;
      }
    }
  }
  bucket.push(node); 
};

HashTable.prototype.insert = function(k, v) {
  var node = {
    key: k,
    value: v
  };
  this._insertNode(node);
  this._usage++;
  if (this._usage / this._limit >= .75) {
    this._resizeArray(2);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node;

  var nodes = (this._storage.get(index) || []).forEach(function(child) {
    if (child.key === k) {
      node = child;
    }
  });
  return node ? node.value : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key === k) {
        bucket.splice(i, 1); 
        this._usage--;
        if (this._usage / this._limit < .25) {
          this._resizeArray(.5);
        }
        return;
      }
    }
  }

};

HashTable.prototype._resizeArray = function(factor) {
  var copyOldToNew = (bucket) => {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this._insertNode(bucket[i]);
      }
    }
  };
  var oldStorage = this._storage;
  var max = this._limit * factor;
  this._limit = max;
  this._storage = LimitedArray(this._limit);
  oldStorage.each(copyOldToNew);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(1)
 * retrieve O(n)
 * remove O(n)
 */


