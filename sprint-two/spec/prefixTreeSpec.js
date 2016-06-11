describe('PrefixTree', function() {
  var prefixTree;
  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should hava a property root', function() {
    expect(prefixTree).to.have.property('root');
  });

  describe('_map', function() {
    it('should take a sequence of letters and return a sequence of t9 numbers', function() {
      expect(prefixTree._map('testing')).to.eql([8, 3, 7, 8, 4, 6, 4]);
    });
  });

  describe('insert', function() {
    it('should add a letter to a tree', function() {
      prefixTree.insert('b');
      expect(prefixTree.autocomplete([2])).to.contain('b');
    });

    it('should add a word to a tree', function() {
      prefixTree.insert('testing');
      expect(prefixTree.autocomplete([8, 3, 7, 8, 4, 6, 4])).to.contain('testing');
    });
  });

  describe('autocomplete', function() {
    it('should autocomplete a number to a word', function() {
      prefixTree.insert('bad');
      expect(prefixTree.autocomplete([2])).to.contain('bad');
    });

    it('should return matched words for a sequence of numbers', function() {
      prefixTree.insert('bad');
      prefixTree.insert('bags');
      prefixTree.insert('calling');
      prefixTree.insert('hello');
      expect(prefixTree.autocomplete([2, 2])).to.contain('bad');
      expect(prefixTree.autocomplete([2, 2])).to.contain('bags');
      expect(prefixTree.autocomplete([2, 2])).to.contain('calling');
      expect(prefixTree.autocomplete([2, 2])).not.to.contain('hello');
    });

    it('should return matched words with length gte the input', function() {
      prefixTree.insert('i');
      prefixTree.insert('inner');
      prefixTree.insert('inter');
      expect(prefixTree.autocomplete([4])).to.contain('i'); 
      expect(prefixTree.autocomplete([4])).to.contain('inner');
      expect(prefixTree.autocomplete([4])).to.contain('inter');

      expect(prefixTree.autocomplete([4, 6])).not.to.contain('i');
      expect(prefixTree.autocomplete([4, 6])).to.contain('inner');
      expect(prefixTree.autocomplete([4, 6])).to.contain('inter');
    });
  });
});

describe('PrefixNode', function() {
  var node;
  beforeEach(function() {
    node = PrefixNode();
  });

  it('should contain an array of words', function() {
    expect(node).to.have.property('words');
    expect(node.words).to.be.an('array');
  });

  it('should contain an array of children', function() {
    expect(node).to.have.property('children');
    expect(node.children).to.be.an('array');
  });
});