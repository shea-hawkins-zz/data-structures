var PrefixNode = function() {
  var node = Object.create(PrefixNode.prototype);
  node.children = [];
  node.words = [];
  return node;
};

var PrefixTree = function() {
  var tree = Object.create(PrefixTree.prototype);
  tree.root = PrefixNode();
  return tree;
};


var PrefixTreeDictionary = {
  'a': 2,
  'b': 2,
  'c': 2,
  'd': 3,
  'e': 3,
  'f': 3,
  'g': 4,
  'h': 4,
  'i': 4,
  'j': 5,
  'k': 5,
  'l': 5,
  'm': 6,
  'n': 6,
  'o': 6,
  'p': 7,
  'q': 7,
  'r': 7,
  's': 7,
  't': 8,
  'u': 8,
  'v': 8,
  'w': 9,
  'x': 9,
  'y': 9,
  'z': 9
};

PrefixTree.prototype._map = function(word) {
  return word.split('').map(function(letter) {
    return PrefixTreeDictionary[letter];
  });
};

PrefixTree.prototype._getNodeFromPath = function(path) {
  var node = this.root;
  path.forEach(function(number) {
    if (!node.children[number]) {
      node.children[number] = PrefixNode();
    }
    node = node.children[number];
  });
  return node;
};

PrefixTree.prototype.insert = function(word) {
  var path = this._map(word);
  var node = this._getNodeFromPath(path);
  node.words.push(word);
};


PrefixTree.prototype.autocomplete = function(path) {
  var traversal = function(node) {
    var words = node.words.slice();
    Object.keys(node.children).forEach(function(key) {
      var child = node.children[key];
      words.push.apply(words, traversal(child));
    });
    return words;
  };
  var node = this._getNodeFromPath(path);
  return traversal(node);
};