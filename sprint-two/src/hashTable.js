
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._conflicts = {};
  this._usage = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = {
    key: k,
    value: v
  };
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [node]);
    this._usage++;
  } else {
    var bucket = this._storage.get(index);
    var found = bucket.some(function(item, i) {
      if (item.key === node.key) {
        bucket[i] = node;
        return true;
      }
    });
    if (!found) {
      bucket.push(node);
      this._usage++;
    }
  }
  if (this._usage / this._limit >= .75) {
    this.resizeArray(2);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node;
  var nodes = this._storage.get(index).forEach(function(child) {
    if (child.key === k) {
      node = child;
    }
  });
  return node ? node.value : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashArray = this._storage.get(index);
  if (hashArray) {
    this._storage.set(index, hashArray.filter(function(node) {
      return node.key !== k;
    })); 
  }
};

HashTable.prototype.resizeArray = function(factor) {
  var copyOldToNew = function (bucket) {
    if (bucket) {
      var index = getIndexBelowMaxForKey(bucket[0].key, max);
      newStorage.set(index, bucket);
    }
  };
  var max = this._limit * factor;
  this._limit = max;
  var newStorage = LimitedArray(this._limit);
  this._storage.each(copyOldToNew);
  this._storage = newStorage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(1)
 * retrieve O(n)
 * remove O(n)
 */


