//  10 <=> 5 <=> 16

// const myDoublyLinkedList = {
//   head: {
//     value: 10,
//     prev: null,
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

class DoublyLinkedList {
  head: any;
  tail: any;
  length: number;

  constructor(value: any) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  public append(value: number) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    console.log(this);

    return this;
  }

  public prepend(value: number) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.print();
  }

  public print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.value);

      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  public insert(index: number, value: number) {
    if (index > this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      prev: null,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;

    newNode.prev = leader;
    newNode.next = follower;

    follower.prev = newNode;

    this.length++;
    return this.print();
  }

  public remove(index: number) {
    if (index > this.length) {
      throw 'Index value not present in Queue';
    }
    // [10,14,5,16, 17, 18]
    // remove(3)
    // [10,14,5, 17, 18]

    const leader = this.traverseToIndex(index - 1); // 10
    const follower = leader.next; //  {17, next, prev}

    leader.next = follower.next;
    follower.next.prev = follower.prev;
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
}

const mydoubleLinkedList = new DoublyLinkedList(10);
mydoubleLinkedList.append(5);
mydoubleLinkedList.append(16);
mydoubleLinkedList.print();

console.log(mydoubleLinkedList.prepend(1));

// myLinkedList.print();
// console.log(mydoubleLinkedList.remove(1));
