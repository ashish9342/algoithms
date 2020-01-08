// {
//   value: 'discord' <=== top
//   next: {
//     value : 'youtube',
//     next:{
//       value: 'google',<=== bottom
//       next: null
//     }
//   }
// }
//  || discord ||
//  || youtube ||
//  || google  ||
//  =============

class NodeBlock {
  value: string;
  next: any;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: any;
  bottom: any;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  public peek() {
    return this.top;
  }
  public print() {
    const array = [];
    let currentNode = this.top;

    if (this.length === 0) {
      return array;
    }
    console.log(currentNode);

    for (let i = 0; i < this.length; i++) {
      array.unshift(currentNode.value);
      currentNode = currentNode.next;
      console.log(array);
    }
    return array;
  }

  public push(value: string) {
    const newNode = new NodeBlock(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPonter = this.top;
      this.top = newNode;
      this.top.next = holdingPonter;
    }
    this.length++;
    // console.log('-----------------------------------------');
    // console.log(this.top);
    // console.log(this.bottom);

    return this;
  }

  public pop() {
    //isEmpty
    if (this.length < 1) {
      throw 'Error: Stack is empty!';
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPonter = this.top;
    this.top = this.top.next;
    this.length--;
    // console.log(this);

    return this;
  }
}

const myStack = new Stack();
// myStack.print();
myStack.push('google');
myStack.push('youtube');
myStack.push('discord');
// myStack.pop();
myStack.print();
