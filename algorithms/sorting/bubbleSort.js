// a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

const swap = (arr, first_Index, second_Index) => {
  [arr[first_Index], arr[second_Index]] = [arr[second_Index], arr[first_Index]] // destructuring the array in a fancy es6 style
}

const bubbleSort = arr => {

  const { length } = arr;
  let i, j

  for (i = 0; i < length; i++) {
    for (j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1); // call swap function
      }
    }
  }

  return arr;
}
console.log(bubbleSort([5, 1, 4, 2, 8]))
