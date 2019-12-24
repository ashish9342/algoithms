class HashTable {
  data: any[];
  constructor(size: number) {
    this.data = new Array(size);
  }

  private _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    // 0(1)

    return hash;
  }

  public set(key: string, value: number) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
      // this.data[address].push([key, value]);
      // console.log(this.data);
    }
    // remove collision
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
    // 0(1)
  }

  public get(key: string) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // 0(1) or 0(n)
    return undefined;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
