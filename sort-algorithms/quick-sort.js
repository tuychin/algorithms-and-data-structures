function quickSort(array) {

  if (array.length === 0) {
    return [];
  }

  let a = [],
      b = [],
      p = array[0];

  for (let i = 1; i < array.length; i++) {
    
    if (array[ i ] < p) {
      a[a.length] = array[ i ]
    } else {
      b[b.length] = array[ i ]
    }

  }
    
  return quickSort(a).concat(p, quickSort(b));
}

const array = [5, 1, 2, 7, 4, 6, 3, 9, 8];

console.log(quickSort(array));