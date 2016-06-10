describe('doubleLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoubleLinkedList();
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should have a tail that points to the previous value', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(7);
    expect(linkedList.tail.prev.value).to.equal(4);
  });

  it('should be able to add to the head', function() {
    linkedList.addToTail(4);
    linkedList.addToHead(7);
    expect(linkedList.head.next.value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    linkedList.addToHead(4);
    linkedList.addToTail(6);
    expect(linkedList.removeTail()).to.equal(6);
  });


  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
