//  10 => 5 => 16

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// [10,5,16]

class LinkedList {
  head: any;
  tail: any;
  length: number;

  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  public append(value: number) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    // console.log(this);

    return this;
  }

  public prepend(value: number) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  public print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  public insert(index: number, value: number) {
    if (index > this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };
    // [10,5,16]
    // insert(1,14)
    // [10,14,5,16]

    const leader = this.traverseToIndex(index - 1); //10
    const holdingPointer = leader.next; //10 = > {5, next}
    leader.next = newNode; //10 => {14, next: null,}
    newNode.next = holdingPointer; // {14, next: {5, next}}
    this.length++;
    return this.print();
  }

  public remove(index: number) {
    if (index > this.length) {
      throw 'Index value not present in Queue';
    }
    // [10,14,5,16]
    // remove(1)
    // [10,5,16]

    const leader = this.traverseToIndex(index - 1); // 10
    const holdingPointer = leader.next; //  {14, next}
    leader.next = holdingPointer.next;
    this.length--;
    return this.print();
  }

  private traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
  public reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    this.tail = this.tail;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.print();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(34);
console.log(myLinkedList.prepend(1));
myLinkedList.reverse();

// myLinkedList.print();
// myLinkedList.remove(1);
