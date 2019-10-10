/**
 * Hash table methods:
 * print, add, remove, lookup
 */

const hash = (string, max) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  const mod = hash % max;

  return mod;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 14;
  }

  
  print() {
    console.log(this.storage)
  }


  add(key, value) {
    const index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ]
    } else {
      const inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }

  };


  remove(key) {
    const index = hash(key, this.storageLimit);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {

      for (let i = 0; i < this.storage[index].length; i++) {
        
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }

      }

    }

  };


  lookup(key) {
    const index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      
      for (let i = 0; i < this.storage[index].length; i++) {

        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }

      }
      
    }

  }

};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')

console.log(ht.lookup('tux'))
ht.print();