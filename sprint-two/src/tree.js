var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  return this.value === target || _.some(this.children, function(child) {
    return child.contains(target);
  });
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    var children = this.parent.children;
    var index = children.indexOf(this);
    children.splice(index, 1);
  }
  this.parent = null;
};

treeMethods.traverse = function(callback) {
  if (this.value !== undefined) {
    callback(this.value);
  }
  this.children.forEach(function(child) {
    child.traverse(callback);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild O(1)
 * contains O(n)
 */
