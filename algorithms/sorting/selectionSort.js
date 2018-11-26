const swap = (arr, indexOfLargestItem, lastIndex) => {
  if (arr[indexOfLargestItem] > arr[lastIndex]) {
    [arr[indexOfLargestItem], arr[lastIndex]] = [arr[lastIndex], arr[indexOfLargestItem]]
  }
  return arr
}

const selectionSort = arr => {
  let i, j, len, stop, sortedArray = arr

  len = arr.length
  for (i = 0; i < len - 1; i++) { // loop the array {number of passes}
    let currentLargest = arr[0], indexOfLargestItem = 0
    for (j = 0; j < len - i; j++) { // loop the indices and get the largest item in the unsorted part of the array
      if (arr[j] > currentLargest) {
        indexOfLargestItem = j;
        currentLargest = arr[j]
      }
    }
    sortedArray = swap(sortedArray, indexOfLargestItem, len - i) // swap items after comparisson
  }
  return sortedArray
}

console.log(selectionSort([5, 0, -2, 36, 89, 25, 60, 100]))
