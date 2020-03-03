class Block {
  first: any;
  next: any;

  constructor(value: string) {
    this.first = value;
    this.next = null;
  }
}


class Queue {
  first: any;
  last: any;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value: string) {
    const newNode = new Block(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this);
    return this;

  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.length--;
    console.log(this);
    return this;
  }
}

const myQueue = new Queue;

myQueue.enqueue('hello');
myQueue.enqueue('how');
myQueue.enqueue('are');
myQueue.enqueue('you?');
myQueue.dequeue();


