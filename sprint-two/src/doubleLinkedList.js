var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var obj = DoubleNode(value);
    if (list.tail !== null) {
      this.tail.next = obj;
      obj.prev = this.tail;
    }
    this.tail = obj;
    if (list.head === null) {
      this.head = obj;
    }
  };

  list.addToHead = function(value) {
    var obj = DoubleNode(value);
    if (list.head !== null) {
      this.head.prev = obj;
      obj.next = this.head;
    }
    this.head = obj;
    if (list.tail === null) {
      this.tail = obj;
    }
  };

  list.removeHead = function() {
    var head = this.head;
    this.head = head.next;
    this.head && (this.head.prev = null);
    head === this.tail && (this.tail = null);
    return head.value;
  };

  list.removeTail = function() {
    var tail = this.tail;
    this.tail = tail.prev;
    this.tail && (this.tail.next = null);
    tail === this.head && (this.head = null);
    return tail.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (target === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var DoubleNode = function(value) {
  var node = Object.create(Node(value));
  node.prev = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail O(1)
 * removeHead O(1)
 * contains O(n)
 */
