let currentItem
let result = []

const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) { // loop through the array left to right
    if (i < arr.length - 1) {// if i is not the last item index
      let swappedItem, currentItem;
      if (arr[i] > arr[i + 1]) { // compare adjacent
        currentItem = arr[i]
        swappedItem = arr[i + 1]
        arr[i] = swappedItem
        arr[i + 1] = currentItem
        if (i > 0) {
          for (let j = i; j > 0; j--) { // loop the array from right to left from the swapped item
            if (swappedItem < arr[j - 1]) {
              const temp = arr[j - 1]
              arr[j - 1] = swappedItem
              arr[j] = temp
            }
          }
        }
      }
    }
  }

  return arr
}

console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]))
