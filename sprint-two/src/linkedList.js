var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var obj = {
      value: value,
      next: null
    };
    if (list.tail !== null) {
      this.tail.next = obj;
    }
    this.tail = obj;
    if (list.head === null) {
      this.head = obj;
    }
  };

  list.removeHead = function() {
    var head = this.head;
    this.head = head.next;
    return head.value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
