var Node = function (_content) {
  this.next = null;
  this.last = null;
  this.content = _content;
}

var Stack = function () {
  this.head = null;
  this.top = null;

  this.push = function (_content) {
    if (this.head == null) {
      this.head = new Node(_content);
      this.top = this.head;
      return this;
    }

    var addedNode = new Node(_content);
    addedNode.last = this.top;

    this.top.next = addedNode;
    this.top = addedNode;
    return this;
  }

  this.pop = function () {
    if (this.head == null) {
      alert(" The Stack is Empty ");
      return null;
    }
    // Now remove top Node
    var a = this.top;
    this.top = this.top.last;
    this.top.next = null;

    return a;
  }

  this.toString = function () {
    var str = " ";
    var node = this.head;

    while (node != null) {
      str += node.content + ":";
      node = node.next;
    }
    return str;
  }
}
