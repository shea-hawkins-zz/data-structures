var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value >= this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);  
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);  
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
