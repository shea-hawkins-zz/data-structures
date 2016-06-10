var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype._toKeyValue = function(object) {
  if (typeof object === 'string') {
    return ['s@-' + object, object];
  } else if (typeof object === 'number') {
    return ['n@-' + object, object];
  } else if (Array.isArray(object)) {
    return ['a@-' + object, object.slice()];
  } else if (typeof object === 'object') {
    return ['o@-' + object, JSON.parse(JSON.stringify(object)];
  }
};

setPrototype.add = function(item) {
  var [key, value] = this._toKeyValue(item);
  this._storage[key] = value;
};

setPrototype.contains = function(item) {
  var [key, value] = this._toKeyValue(item);
  return key in this._storage;
};

setPrototype.remove = function(item) {
  var [key, value] = this._toKeyValue(item);
  delete this._storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add O(1)
 * contains O(1)
 * remove O(1)
 */
