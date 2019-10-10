function linearSearch(value, array) {
  
  for (let i = 0; i < array.length; i++) {

    if (array[i] === value) {
      return i;
    }

  }

  return -1;
}

const array = [5, 1, 2, 7, 4, 6, 3, 9, 8];

console.log(linearSearch(7, array));
console.log(linearSearch(10, array));
