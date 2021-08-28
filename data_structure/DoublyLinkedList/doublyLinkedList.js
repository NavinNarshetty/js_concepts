class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      oldTail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let midPointofList = Math.floor(this.length / 2);
    let counter;
    let node;
    if (counter < midPointofList) {
      counter = 0;
      node = this.head;
      while (counter != index) {
        counter++;
        node = node.next;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while (counter != index) {
        counter--;
        node = node.prev;
      }
    }
    return node;
  }
  set(index, value) {
    const fetchedNode = this.get(index);
    if (fetchedNode) {
      fetchedNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removednode = this.get(index);
    let beforeNode = removednode.prev;
    let afterNode = removednode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removednode.prev = null;
    removednode.next = null;
    this.length--;
    return removednode;
  }

  reverse() {
    if (!this.head) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    while (node) {
      let hold = node.next;
      node.next = node.prev;
      node.prev = hold;
      node = node.prev;
    }
  }
}

const node = new DoubleyLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
node.push(6);
node.push(7);
// node.pop()
console.log(node.get(5));
// console.log(node)
