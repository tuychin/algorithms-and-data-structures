function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    arr.forEach((item, index) => {
      
      if (item > arr[index + 1]) {
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }

    })

  } while (swapped);

  return arr;
}

const array = [5, 7, 8, 60, 24, 77, 90, 63, 4, 8, 2, 27];

console.log(bubbleSort(array));
