function binarySearch(value, array) {
  let first = 0;
  let last = array.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (array[middle] === value) {
      found = true;
      position = middle;

    } else if (array[middle] > value) {
      last = middle - 1;

    } else {
      first = middle + 1;
    }

  }

  return position;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(3, array));
console.log(binarySearch(10, array));