function selectionSort(array) {

  array.forEach((element1, i) => {
    let min = i;
    
    array.forEach((element2, j) => {

      if (element1 < element2) {
        min = j;
      }

      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;

    });

  });

  return array;
}

const array = [5, 1, 2, 7, 4, 6, 3, 9, 8];

console.log(selectionSort(array));
