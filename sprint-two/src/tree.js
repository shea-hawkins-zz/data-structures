var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  return this.value === target || _.some(this.children, function(child) {
    return child.contains(target);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild O(1)
 * contains O(n)
 */
