describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});

describe('set datatype handling', function() {
  var set;
  
  beforeEach(function() {
    set = Set();
  });

  it('should store numbers as Number()s', function() {
    set.add(6);
    expect(set.contains(6)).to.equal(true);
  });
  it('should differentiate between Numbers() and Strings', function() {
    set.add(6);
    expect(set.contains('6')).to.equal(false);
  });
  it('should add numbers and strings separately', function() {
    set.add(6);
    set.add('6');
    expect(set.contains(6)).to.equal(true);
  });
  it('should handle object values', function() {
    set.add({a: 5, b: 6});
    expect(set.contains({a: 5, b: 6})).to.equal(true);
  });
  it('should store array values', function() {
    set.add([5, 6, 7, 8]);
    expect(set.contains([5, 6, 7, 8])).to.equal(true);
  });
});
