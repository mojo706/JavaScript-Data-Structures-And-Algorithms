const quickSort = arr => {

  let leftArr = []
  let rightArr = []
  const randomIndex = Math.floor(Math.random() * arr.length)

  const pivotValue = arr[randomIndex]

  for (let i = 0; i < arr.length; i++) {
    if (i !== randomIndex) {
      if (arr[i] >= pivotValue) {
        rightArr.push(arr[i])
      } else {
        leftArr.push(arr[i])
      }
    }
  }

  if (leftArr.length > 1) {
    leftArr = quickSort(leftArr);
  }

  if (rightArr.length > 1) {
    rightArr = quickSort(rightArr);
  }

  const sortedArray = leftArr.concat(pivotValue).concat(rightArr)

  return sortedArray
}

console.log(quickSort([51, 95, 86, 72, 42, 38, 39, 41, 15]))
