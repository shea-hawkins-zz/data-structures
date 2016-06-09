

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.nodes = [];
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var node = GraphNode(node);
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.some(this.nodes, function(childNode) {
    return childNode.value === node;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes = this.nodes.filter(function(childNode) {
    return childNode.value !== node;
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var GraphNode = function(value) {
  var node = {};
  node.neighbors = [];
  node.value = value;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


